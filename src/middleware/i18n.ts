import {
  ALIAS_LANGUAGE_MAP,
  FALLBACK_LANGUAGE,
  LANGUAGE_CODES,
} from "@/configurations/i18n";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

const cookie = "lang";

acceptLanguage.languages(LANGUAGE_CODES);

const getLanguageFromRequest = (req: NextRequest) => {
  if (req.cookies.has(cookie)) {
    const val = req.cookies.get(cookie)?.value;
    return acceptLanguage.get(val) ?? FALLBACK_LANGUAGE;
  }

  const accepts = req.headers.get("accept-language");
  return acceptLanguage.get(accepts) ?? FALLBACK_LANGUAGE;
};

const getLanguageFromPath = (path: string) => {
  const lang = LANGUAGE_CODES.find((w) => path.startsWith(`/${w}`));
  return lang ?? FALLBACK_LANGUAGE;
};

const hasLanguageInPath = (path: string) => {
  return LANGUAGE_CODES.some((w) => path.startsWith(`/${w}`));
};

const normalizePathname = (path: string) => {
  if (path.endsWith("/index") || path.endsWith("/index/")) {
    return path.substring(0, path.lastIndexOf("/index"));
  }

  return path;
};

const normalizeLangName = (lang: string) => {
  const alias = ALIAS_LANGUAGE_MAP[lang as keyof typeof ALIAS_LANGUAGE_MAP];
  return alias ? alias : lang;
};

export const i18n = async (req: NextRequest) => {
  const lang = normalizeLangName(getLanguageFromRequest(req));
  const pathname = normalizePathname(req.nextUrl.pathname);

  if (
    !LANGUAGE_CODES.some((w) => pathname.startsWith(`/${w}`)) &&
    !pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${pathname}${req.nextUrl.search}`, req.url)
    );
  }

  if (hasLanguageInPath(pathname)) {
    const requestLanguage = normalizeLangName(getLanguageFromPath(pathname));
    if (requestLanguage !== lang) {
      const response = NextResponse.next();
      response.cookies.set(cookie, requestLanguage);

      return response;
    }
  }

  if (req.headers.has("referer")) {
    const referrerUrl = new URL(req.headers.get("referer") ?? "", req.url);
    const langInReferrer = LANGUAGE_CODES.find((w) =>
      referrerUrl.pathname.startsWith(`/${w}`)
    );

    const response = hasLanguageInPath(pathname)
      ? NextResponse.next()
      : NextResponse.redirect(
          new URL(`/${lang}${pathname}${req.nextUrl.search}`, req.url)
        );

    if (langInReferrer) {
      response.cookies.set(cookie, langInReferrer);
    }

    return response;
  }

  return req.nextUrl.pathname !== pathname
    ? NextResponse.redirect(
        new URL(`${pathname}${req.nextUrl.search}`, req.url)
      )
    : NextResponse.next();
};
