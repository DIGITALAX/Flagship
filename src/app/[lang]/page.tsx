import Entry from "../componentes/Common/modules/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";
import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/`;

  return {
    title: "DIGITALAX",
    description: "Emancipatory Lifestyle Tech.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "DIGITALAX",
      description: "Emancipatory Lifestyle Tech.",
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
      title: "DIGITALAX",
      description: "Emancipatory Lifestyle Tech.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}


export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <Entry dict={dict} />;
}
