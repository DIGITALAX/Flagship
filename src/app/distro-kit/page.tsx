import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { LOCALES } from "../lib/constants";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Distro Kit",
  description: "DIGITALAX distro kit, templates, and media kit assets.",
  alternates: {
    canonical: `https://digitalax.xyz/distro-kit/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/distro-kit/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  openGraph: {
    title: "Distro Kit | DIGITALAX",
    description: "DIGITALAX distro kit, templates, and media kit assets.",
    url: "https://digitalax.xyz/distro-kit/",
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

export default async function DistroKit() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <DistroKitEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
