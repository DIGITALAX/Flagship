import { Suspense } from "react";
import { getDictionary } from "./[lang]/dictionaries";
import Wrapper from "./componentes/Common/modules/Wrapper";
import Entry from "./componentes/Common/modules/Entry";
import { Metadata } from "next";
import { LOCALES } from "./lib/constants";

export const metadata: Metadata = {
  title: "DIGITALAX",
  description: "Emancipatory Lifestyle Tech.",
  alternates: {
    canonical: "https://digitalax.xyz/",
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  openGraph: {
    title: "DIGITALAX",
    description: "Emancipatory Lifestyle Tech.",
    url: "https://digitalax.xyz/",
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

export default async function IndexPage() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <Entry dict={dict} />
        </Suspense>
      }
    />
  );
}
