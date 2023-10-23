import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import {
  FALLBACK_LANGUAGE,
  LANGUAGE_CODES,
} from "@/configurations/internationalization";

const cookie = "lang";

acceptLanguage.languages(LANGUAGE_CODES);

const getLanguageFromRequest = (req: NextRequest) => {
  if (req.cookies.has(cookie)) {
    return (
      acceptLanguage.get(req.cookies.get(cookie)?.value) ?? FALLBACK_LANGUAGE
    );
  }

  return (
    acceptLanguage.get(req.headers.get("accept-language")) ?? FALLBACK_LANGUAGE
  );
};

const getLanguageFromPath = (path: string) => {
  return (
    LANGUAGE_CODES.find((w) => path.startsWith(`/${w}`)) ?? FALLBACK_LANGUAGE
  );
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

const i18n = async (req: NextRequest) => {
  const lang = getLanguageFromRequest(req);
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
    const requestLanguage = getLanguageFromPath(pathname);
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

export { i18n };
