import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { LOCALES } from "../lib/constants";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Distro Kit",
  alternates: {
    canonical: `https://digitalax.xyz/distro-kit/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/distro-kit/`;
      return acc;
    }, {} as { [key: string]: string }),
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
