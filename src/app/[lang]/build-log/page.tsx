import { Metadata } from "next";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import BuildLogEntry from "@/app/componentes/Build/modules/BuildEntry";
import { LOCALES } from "@/app/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/build-log/`;

  return {
    title: "Build Log",
    description:
      "We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/build-log/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Build Log | DIGITALAX",
      description:
        "We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day.",
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
      title: "Build Log | DIGITALAX",
      description:
        "We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}


export default async function BuildLog({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <BuildLogEntry dict={dict} />;
}
