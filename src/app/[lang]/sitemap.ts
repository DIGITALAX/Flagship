import { MetadataRoute } from "next";
import { LOCALES } from "../lib/constants";

export default async function sitemap(params: {
  lang: string;
}): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}/build-log`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/build-log`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}/distro-kit`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/distro-kit`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}/mona`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/mona`,
        ])
      ),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}/prints`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/prints`,
        ])
      ),
    },
  ];
}
