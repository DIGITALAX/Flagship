import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/build-log`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/distro-kit`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mona`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/prints`,
    },
  ];
}
