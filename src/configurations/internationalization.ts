import type { ReadonlyDeep } from "type-fest";

type Language = { code: string; name: string };

const LANGUAGES = [
  { code: "en-us", name: "English - United States" },
  { code: "ja-jp", name: "日本語" },
] as const satisfies ReadonlyDeep<Language[]>;

type LanguageCodes = (typeof LANGUAGES)[number]["code"];

const FALLBACK_LANGUAGE: LanguageCodes = "en-us";

// calculated
const LANGUAGE_CODES: string[] = LANGUAGES.map((w) => w.code);

export { FALLBACK_LANGUAGE, LANGUAGES, LANGUAGE_CODES };
export type { Language, LanguageCodes };
