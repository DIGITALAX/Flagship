import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";
import { tParams } from "../layout";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/whitepaper/`;

  return {
    title: "Whitepaper V3",
    description: "DIGITALAX Whitepaper V3.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/whitepaper/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Whitepaper V3 | DIGITALAX",
      description: "DIGITALAX Whitepaper V3.",
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
      title: "Whitepaper V3 | DIGITALAX",
      description: "DIGITALAX Whitepaper V3.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}

export default function Whitepaper() {
  return (
    <div className="relative w-full h-screen flex">
      <embed
        className="w-full h-full relative flex"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
}
