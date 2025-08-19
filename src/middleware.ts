import { chain } from "./middleware/chain";
import { i18n } from "./middleware/i18n";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - sitemap-dynamic
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!api|_next/static|_next/image|.well-known|sitemap-dynamic/|.*.ico|.*.png|.*.svg|.*.txt|sitemap.xml).*)",
  ],
};

export const middleware = chain(i18n);
