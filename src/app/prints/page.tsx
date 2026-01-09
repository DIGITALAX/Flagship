import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";
import { Metadata } from "next";
import { LOCALES } from "../lib/constants";

export const metadata: Metadata = {
  title: "Prints",
  description: "DIGITALAX prints, posters, and visual drops.",
  alternates: {
    canonical: `https://digitalax.xyz/prints/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/prints/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  openGraph: {
    title: "Prints | DIGITALAX",
    description: "DIGITALAX prints, posters, and visual drops.",
    url: "https://digitalax.xyz/prints/",
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

export default async function Prints() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <PrintsEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
