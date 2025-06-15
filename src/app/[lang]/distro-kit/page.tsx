import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";

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

export default async function DistroKit({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <DistroKitEntry dict={dict} />;
}
