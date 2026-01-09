import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://digitalax.xyz/${lang}/distro-kit/`;

  return {
    title: "Distro Kit",
    description: "DIGITALAX distro kit, templates, and media kit assets.",
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://digitalax.xyz/${item}/distro-kit/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Distro Kit | DIGITALAX",
      description: "DIGITALAX distro kit, templates, and media kit assets.",
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
      title: "Distro Kit | DIGITALAX",
      description: "DIGITALAX distro kit, templates, and media kit assets.",
      site: "@digitalax_",
      creator: "@digitalax_",
      images: ["https://digitalax.xyz/opengraph-image.png"],
    },
  };
}

export default async function DistroKit({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <DistroKitEntry dict={dict} />;
}
