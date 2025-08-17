import { type Article, allArticles } from "contentlayer2/generated";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

const normalizePath = (path: string): string => {
  if (path.startsWith("/")) {
    return path.substring(1);
  }

  return path;
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
