import type { ReadonlyDeep } from "type-fest";

type Language = { code: string; name: string };

type Languages = Language[];

const LANGUAGES = [
  { code: "en-us", name: "English" },
  { code: "ja-jp", name: "日本語" },
] as const satisfies ReadonlyDeep<Languages>;

type Fallback = (typeof LANGUAGES)[number]["code"];

const LANGUAGE_CODES: string[] = LANGUAGES.map((w) => w.code);

const FALLBACK: Fallback = "en-us";

export { LANGUAGES, LANGUAGE_CODES, FALLBACK };
