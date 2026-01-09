import { NextResponse } from "next/server";
import { LOCALES } from "../lib/constants";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://digitalax.xyz";

const ROUTES = [
  "/",
  "/build-log/",
  "/distro-kit/",
  "/computational-manufacturing/",
  "/prints/",
  "/tokens/",
  "/whitepaper/",
];

const buildAlternates = (route: string) => {
  const alternates = LOCALES.map(
    (locale) => `
        <xhtml:link 
          rel="alternate" 
          hreflang="${locale}" 
          href="${baseUrl}/${locale}${route}" />
      `
  ).join("");

  const xDefault = `
      <xhtml:link 
        rel="alternate" 
        hreflang="x-default" 
        href="${baseUrl}${route}" />
    `;

  return `${alternates}${xDefault}`;
};

const buildLocs = (route: string) => [
  `${baseUrl}${route}`,
  ...LOCALES.map((locale) => `${baseUrl}/${locale}${route}`),
];

export async function GET() {
  const urls = ROUTES.flatMap((route) => {
    const alternates = buildAlternates(route);
    return buildLocs(route).map(
      (loc) => `
      <url>
        <loc>${loc}</loc>
        ${alternates}
      </url>
    `
    );
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
