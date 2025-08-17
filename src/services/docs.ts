import { type Article, allArticles } from "contentlayer2/generated";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

const normalizePath = (path: string): string => {
  if (path.startsWith("/")) {
    return path.substring(1);
  }

  return path;
};

const getParent = (path: string): string => {
  return path.split("/").slice(0, -1).join("/");
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

export const navigation = (
  doc: Article,
  lang: string
): { root: string; paths: string[] } => {
  if (doc.navigation) {
    return { root: doc.path, paths: doc.navigation };
  }

  const path = doc.path;
  const parentDoc = find(getParent(path), lang);
  if (parentDoc) {
    return { root: parentDoc.path, paths: parentDoc.navigation ?? [] };
  }

  return { root: path, paths: [] };
};
