import { Article, Category, allArticles } from "contentlayer/generated";
import { createServerContext, useContext } from "react";

import { FALLBACK } from "@/lib/i18n";

import {
  RouteContextProps,
  RouteContextT,
  useRouteContext,
} from "./RouteContext";

type SideBarLinkItem = {
  title: string;
  href: string;
};

type SideBarNestItem = {
  title: string;
  items: SideBarItem[];
};

type SideBarItem = SideBarLinkItem | SideBarNestItem;

type SideBar = SideBarItem[];

type BreadcrumbActiveItem = { label: string };

type BreadcrumbLinkItem = { label: string; href: string };

type BreadcrumbItem = BreadcrumbLinkItem | BreadcrumbActiveItem;

type Breadcrumb = BreadcrumbItem[];

type ArticleContextT = {
  article: Article | null;
  sidebar: SideBar | null;
  breadcrumbs: Breadcrumb | null;
  product: string | null;
  isFallbackContent: boolean;
};

const ArticleContext = createServerContext<ArticleContextT | null>(
  "article",
  null
);

const findArticle = (route: RouteContextProps): Article | null => {
  const matchedRouteArticles = allArticles.filter(
    (w) => w.product === route.product && w.path === route.rest.join("/")
  );

  const matchedVersionArticles = matchedRouteArticles.filter((w) =>
    route.version ? w.versions?.includes(route.version) : true ?? true
  );

  const article =
    matchedVersionArticles.find((w) => w.lang === route.language) ??
    matchedRouteArticles.find((w) => w.lang === FALLBACK) ??
    null;

  return article;
};

type RootFinderProps = {
  isMostClosest?: boolean;
};

const findRootArticle = (
  route: RouteContextT,
  params?: RootFinderProps
): Article | null => {
  let r = route;
  let opts: RootFinderProps = {
    isMostClosest: true,
    ...params,
  };

  while (true) {
    const article = findArticle(r);
    if (article) {
      if (article.navigation) {
        if (opts.isMostClosest) {
          return article;
        }
      }

      r = r.assign({ rest: r.rest.slice(0, -1) });
    }

    break;
  }

  return findArticle({ ...route, rest: [] });
};

const getSideBarItems = (
  product: string | null,
  route: RouteContextT,
  path: string
): SideBarItem[] => {
  const routing = route.assign({ relative: path });
  const article = findArticle(routing);

  if (!article || route.product !== product) {
    return [];
  }

  const items: SideBarItem[] = [];

  if (path !== "./") {
    // first, add normal children
    if (article?.navigation?.children?.length) {
      const { children } = article.navigation;
      children
        .map((w) => getSideBarItems(product, routing, w))
        .forEach((w) => items.push(...w));
    }

    // second, add categorized children
    if (article?.navigation?.categories?.length) {
      const { categories } = article.navigation;
      categories
        .map((w) => getCategorizedSidebarItems(product, routing, w))
        .forEach((w) => items.push(...w));
    }

    if (items.length > 0) {
      return [
        {
          title: article.shortTitle ?? article.title,
          items,
        },
      ];
    }
  }

  return [
    {
      title: article.shortTitle ?? article.title,
      href: routing.build({}),
    },
  ];
};

const getCategorizedSidebarItems = (
  product: string | null,
  route: RouteContextT,
  category: Category
): SideBarItem[] => {
  const categorizedItems = category.items
    .flatMap((w) => getSideBarItems(product, route, w))
    .filter((w) => !!w)
    .map((w) => w!);

  const article = findArticle(route);

  if (categorizedItems.length > 0) {
    if (category.name) {
      return [
        {
          title: category.name ?? article!.shortTitle ?? article!.title,
          items: categorizedItems,
        },
      ];
    }
  }

  return categorizedItems;
};

const getRootSidebarItems = (route: RouteContextT): SideBar | null => {
  const product = route.product;
  const article = findRootArticle(route);
  const hasNavigation =
    article?.navigation &&
    (article?.navigation?.children?.length ||
      article?.navigation?.categories?.length);

  if (!hasNavigation) {
    return null;
  }

  const items: SideBar = [];

  // first, add normal children
  if (article?.navigation?.children?.length) {
    const { children } = article.navigation;
    children
      .map((w) => getSideBarItems(product, route, w))
      .forEach((w) => items.push(...w));
  }

  // second, add categorized children
  if (article?.navigation?.categories?.length) {
    const { categories } = article.navigation;
    categories
      .map((w) => getCategorizedSidebarItems(product, route, w))
      .forEach((w) => items.push(...w));
  }

  return items;
};

const getBreadcrumbsItems = (route: RouteContextT): Breadcrumb | null => {
  const items: Breadcrumb = [];
  let r = route;

  while (true) {
    const article = findArticle(r);

    if (article) {
      if (r === route) {
        items.push({
          label: article.shortTitle ?? article.title,
        });
      } else {
        items.push({
          label: article.shortTitle ?? article.title,
          href: r.build({}),
        });
      }

      if (r.rest.length === 0) break;

      r = r.assign({ rest: r.rest.slice(0, -1) });
      continue;
    }

    break;
  }

  items.reverse();
  return items;
};

const getArticleContext = (route: RouteContextProps): ArticleContextT => {
  const article = findArticle(route);
  const ctx = "assign" in route ? (route as RouteContextT) : null;
  const root = ctx ? findRootArticle(ctx, { isMostClosest: false }) : null;
  const sidebar = ctx ? getRootSidebarItems(ctx.assign({ rest: [] })) : null;
  const breadcrumbs = ctx ? getBreadcrumbsItems(ctx) : null;

  return {
    article,
    sidebar,
    breadcrumbs,
    product: root?.shortTitle ?? null,
    isFallbackContent: route.language !== article?.lang,
  };
};

const useArticleContext = () => {
  const route = useRouteContext();
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error(
      "useArticleContext must be used within a ArticleContext.Provider"
    );
  }

  const resolve = (path: { abs?: string; rel?: string }): RouteContextT => {
    if (path.abs) {
      return route.assign({ absolute: path.abs });
    }

    return route.assign({ relative: path.rel });
  };

  return {
    ...context,
    findAbsolute: (path: string) => findArticle(resolve({ abs: path })),
    findRelative: (path: string) => findArticle(resolve({ rel: path })),
  };
};

export { ArticleContext, getArticleContext, useArticleContext };
export type {
  ArticleContextT,
  SideBar,
  SideBarItem,
  SideBarLinkItem,
  SideBarNestItem,
};
