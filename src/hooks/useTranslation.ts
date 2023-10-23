import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

import {
  FALLBACK_LANGUAGE,
  LANGUAGE_CODES,
} from "@/configurations/internationalization";

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
        fallbackLng: FALLBACK_LANGUAGE,
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
      lang ?? FALLBACK_LANGUAGE,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: instance,
  } as const;
};

export { useTranslation };
