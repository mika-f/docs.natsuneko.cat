import { FALLBACK, LANGUAGE_CODES } from "@/lib/i18n";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

const initI18next = async (lang: string | undefined, ns: string | string[]) => {
  const instance = createInstance();

  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        return import(`../locales/${language}/${namespace}.json`);
      })
    )
    .init(
      {
        supportedLngs: LANGUAGE_CODES,
        fallbackLng: FALLBACK,
        lng: lang,
        fallbackNS: "translation",
        defaultNS: "translation",
        ns,
        lowerCaseLng: true,
      },
      undefined
    );

  return instance;
};

const useTranslation = async (
  lang: string | undefined,
  ns: string | string[],
  options: { keyPrefix?: string } = {}
) => {
  const instance = await initI18next(lang, ns);

  return {
    t: instance.getFixedT(
      lang ?? FALLBACK,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: instance,
  } as const;
};

export { useTranslation };
