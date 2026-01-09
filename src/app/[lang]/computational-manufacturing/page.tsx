import CompEntry from "@/app/componentes/Comp/modals/CompEntry";
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
  const canonical = `https://digitalax.xyz/${lang}/computational-manufacturing/`;

  return {
    title: "Computational Manufacturing",
    description: "DIGITALAX computational manufacturing systems and research.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/computational-manufacturing/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Computational Manufacturing | DIGITALAX",
      description:
        "DIGITALAX computational manufacturing systems and research.",
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
      title: "Computational Manufacturing | DIGITALAX",
      description:
        "DIGITALAX computational manufacturing systems and research.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}

export default async function ComputationalManufacturing({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <CompEntry dict={dict} />;
}
