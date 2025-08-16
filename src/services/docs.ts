import { type Article, allArticles } from "contentlayer2/generated";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

export const find = (path: string, lang: string): Article | null => {
  let doc = allArticles.find((w) => w.path === path && w.lang === lang) ?? null;
  if (!doc && lang !== FALLBACK_LANGUAGE) {
    doc = find(path, FALLBACK_LANGUAGE);
  }

  return doc;
};
