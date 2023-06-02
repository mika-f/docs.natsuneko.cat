import { Article, allArticles } from "contentlayer/generated";
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

type ArticleContextT = {
  article: Article | null;
  sidebar: SideBar | null;
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

const findRootArticle = (route: RouteContextProps): Article | null => {
  return findArticle({ ...route, rest: [] });
};

const getSidebarItems = (route: RouteContextT): SideBar | null => {
  const article = findRootArticle(route);
  if (!article || !article.children || article.children.length === 0) {
    return null;
  }

  return article.children
    .flatMap((child) => {
      const rel = route.assign({ relative: child, rest: [] });
      const item = findArticle(rel);

      if (item) {
        const navigations: SideBar = [
          {
            title: item.shortTitle ?? item.title,
            href: rel.build({}),
          },
        ];

        if (item.children && item.children.length > 0) {
          const items = getSidebarItems(rel);

          if (items) {
            navigations.push(...items);
          }
        }

        return navigations;
      }

      return null;
    })
    .filter((w) => !!w)
    .map((w) => w!);
};

const getArticleContext = (route: RouteContextProps): ArticleContextT => {
  const article = findArticle(route);
  const root = findRootArticle(route);
  const sidebar =
    "assign" in route ? getSidebarItems(route as RouteContextT) : null;

  return {
    article,
    sidebar,
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
