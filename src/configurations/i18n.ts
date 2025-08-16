import type { ReadonlyDeep } from "type-fest";

export type Language = { code: string; name: string };

export const LANGUAGES = [
  { code: "en-us", name: "English - United States" },
  { code: "ja-jp", name: "日本語" },
] as const satisfies ReadonlyDeep<Language[]>;

export type LanguageCodes = (typeof LANGUAGES)[number]["code"];

export const ALIAS_LANGUAGE_MAP = {
  ja: "ja-jp",
  en: "en-us",
} satisfies ReadonlyDeep<Record<string, LanguageCodes>>;

export const FALLBACK_LANGUAGE: LanguageCodes = "ja-jp";

export const LANGUAGE_CODES: string[] = [
  ...LANGUAGES.map((w) => w.code),
  ...Object.keys(ALIAS_LANGUAGE_MAP),
];
