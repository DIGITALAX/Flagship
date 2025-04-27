import { MetadataRoute } from "next";
import { LOCALES } from "./lib/constants";

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
