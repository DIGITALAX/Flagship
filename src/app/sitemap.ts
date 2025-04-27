import { MetadataRoute } from "next";
import { LOCALES } from "./lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/build-log`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/build-log`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/distro-kit`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/distro-kit`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mona`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/mona`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/prints`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/prints`,
        ])
      ),
    },
  ];
}
