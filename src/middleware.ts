import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";
const CANONICAL_HOST = "digitalax.xyz";
const TRACKING_QUERY_KEYS = new Set([
  "gclid",
  "fbclid",
  "msclkid",
  "mc_cid",
  "mc_eid",
  "_hsenc",
  "_hsmi",
  "ref",
  "referrer",
  "utm_referrer",
]);

function removeTrackingParams(url: URL) {
  let changed = false;
  const keys = [...url.searchParams.keys()];

  keys.forEach((key) => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.startsWith("utm_") || TRACKING_QUERY_KEYS.has(lowerKey)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  return changed;
}

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

function isBot(userAgent: string) {
  return /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou/i.test(
    userAgent
  );
}

export function middleware(request: NextRequest) {
  const normalizedUrl = request.nextUrl.clone();
  const { pathname } = normalizedUrl;
  const userAgent = request.headers.get("user-agent") || "";
  const host =
    request.headers.get("host")?.toLowerCase() || normalizedUrl.host.toLowerCase();

  let shouldRedirect = false;

  if (host === `www.${CANONICAL_HOST}`) {
    normalizedUrl.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (removeTrackingParams(normalizedUrl)) {
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(normalizedUrl, 308);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/opengraph-image.png") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/image-sitemap.xml") ||
    pathname.startsWith("/video-sitemap.xml") ||
    pathname.startsWith("/llms.txt")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (isBot(userAgent)) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  if (locale === defaultLocale) {
    return NextResponse.next();
  }

  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );

  response.cookies.set("NEXT_LOCALE", locale, { path: "/", sameSite: "lax" });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|images|llms.txt|robots.txt|fonts|favicon.ico|opengraph-image.png|api|sitemap|image-sitemap.xml|video-sitemap.xml).*)",
  ],
};
