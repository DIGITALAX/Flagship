import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "es"];
let defaultLocale = "en";

function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  let headers = {
    "accept-language": request.headers.get("accept-language") || "en",
  };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );


  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);

  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );

  response.cookies.set("NEXT_LOCALE", locale, { path: "/", sameSite: "lax" });

  return response;
}

export const config = {
  matcher: ["/((?!_next|images|fonts|favicon.ico|api|sitemap).*)"],
};
