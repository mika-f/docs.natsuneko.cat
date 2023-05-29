import { Article, allArticles } from "contentlayer/generated";
import { createServerContext, useContext } from "react";

import { FALLBACK } from "@/lib/i18n";

import type { RouteContextT } from "./RouteContext";

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
  isFallbackContent: boolean;
};

const ArticleContext = createServerContext<ArticleContextT | null>(
  "article",
  null
);

const findArticle = (route: RouteContextT): Article | null => {
  const matchedRouteArticles = allArticles.filter(
    (w) => w.product === route.product && w.path === route.rest.join("/")
  );

  const matchedVersionArticles = matchedRouteArticles.filter(
    (w) => w.versions?.includes(route.version) ?? true
  );

  const article =
    matchedVersionArticles.find((w) => w.lang === route.language) ??
    matchedRouteArticles.find((w) => w.lang === FALLBACK) ??
    null;

  return article;
};

const getSidebarItems = (route: RouteContextT): SideBar | null => {
  const article = findArticle({ ...route, rest: [] });
  if (!article || !article.children || article.children.length === 0) {
    return null;
  }

  return article.children
    .flatMap((child) => {
      const item = findArticle({
        ...route,
        rest: child.split("/").filter((w) => !!w),
      });

      if (item) {
        if (item.children && item.children.length > 0) {
          return getSidebarItems({ ...route, rest: [child] });
        }

        return {
          title: item.title,
          href: `/${route.language}/${route.product}/${route.version}/${child}`,
        };
      }

      return null;
    })
    .filter((w) => !!w)
    .map((w) => w!);
};

const getArticleContext = (route: RouteContextT): ArticleContextT => {
  const article = findArticle(route);
  const sidebar = getSidebarItems(route);

  return {
    article,
    sidebar,
    isFallbackContent: route.language !== article?.lang,
  };
};

const useArticleContext = () => {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error(
      "useArticleContext must be used within a ArticleContext.Provider"
    );
  }

  return context;
};

export { ArticleContext, getArticleContext, useArticleContext };
export type { ArticleContextT };