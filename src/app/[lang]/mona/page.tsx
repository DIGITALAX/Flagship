import MonaEntry from "@/app/componentes/Mona/modals/MonaEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { LOCALES } from "@/app/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mona",
  alternates: {
    canonical: `https://digitalax.xyz/mona/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/mona/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function Mona({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <MonaEntry dict={dict} />;
}
