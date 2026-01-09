import { getDictionary } from "../dictionaries";
import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { tParams } from "../layout";
import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/prints/`;

  return {
    title: "Prints",
    description: "DIGITALAX prints, posters, and visual drops.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/prints/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Prints | DIGITALAX",
      description: "DIGITALAX prints, posters, and visual drops.",
      url: canonical,
      siteName: "DIGITALAX",
      images: [
        {
          url: "https://digitalax.xyz/opengraph-image.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Prints | DIGITALAX",
      description: "DIGITALAX prints, posters, and visual drops.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}

export default async function Prints({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <PrintsEntry dict={dict} />;
}
