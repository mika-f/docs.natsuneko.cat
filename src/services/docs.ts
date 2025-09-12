import { type Article, allArticles } from "contentlayer2/generated";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

const normalizePath = (path: string): string => {
  if (path.startsWith("/")) {
    return path.substring(1).trim();
  }

  return path.trim();
};

const getParent = (path: string): string => {
  return path.split("/").slice(0, -1).join("/").trim();
};

export const find = (path: string, lang: string): Article | null => {
  let doc =
    allArticles.find(
      (w) => w.path === normalizePath(path) && w.lang === lang
    ) ?? null;
  if (!doc && lang !== FALLBACK_LANGUAGE) {
    doc = find(path, FALLBACK_LANGUAGE);
  }

  return doc;
};

export const breadcrumb = (path: string, lang: string): Article[] => {
  const parts = path.split("/");
  const breadcrumbs: Article[] = [];

  for (let i = 1; i <= parts.length; i++) {
    const subPath = parts.slice(0, i).join("/");
    const doc = find(subPath, lang);
    if (doc) {
      breadcrumbs.push(doc);
    }
  }

  return breadcrumbs;
};

type NavigationPathItem = {
  href: string;
};

type NavigationNestItem = {
  children: NavigationItem[];
  href: string;
};

type NavigationItem = NavigationPathItem | NavigationNestItem;

const getChildItems = (article: Article, lang: string): NavigationItem[] => {
  return (
    article.navigation?.items.map<NavigationItem>((w) => {
      const item = find(w, lang);
      if (item?.navigation?.self) {
        return { children: getChildItems(item, lang), href: item.path };
      }

      return { href: w };
    }) ?? []
  );
};

export const navigation = (
  doc: Article,
  lang: string
): { root: string; paths: NavigationItem[] } => {
  if (doc.navigation?.items?.length && doc.navigation?.self === false) {
    const paths = doc.navigation.items.map<NavigationItem>((w) => {
      const item = find(w, lang);
      if (item?.navigation?.self) {
        return { children: getChildItems(item, lang), href: item.path };
      }

      return { href: w };
    });
    return { root: doc.path, paths };
  }

  const path = doc.path;
  const parentDoc = find(getParent(path), lang);
  if (parentDoc) {
    return navigation(parentDoc, lang);
  }

  return { root: path, paths: [] };
};

export const isFallback = (document: Article, lang: string) => {
  return document.lang !== lang;
};
