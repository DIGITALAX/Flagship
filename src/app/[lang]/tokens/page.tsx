import TokensEntry from "@/app/componentes/Tokens/modules/TokensEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { LOCALES } from "@/app/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/tokens/`;

  return {
    title: "Team & Tokens",
    description: "DIGITALAX team, treasury, and token media.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/tokens/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Team & Tokens | DIGITALAX",
      description: "DIGITALAX team, treasury, and token media.",
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
      title: "Team & Tokens | DIGITALAX",
      description: "DIGITALAX team, treasury, and token media.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}

export default async function ComputationalManufacturing({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <TokensEntry dict={dict} />;
}
