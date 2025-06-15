import { getDictionary } from "../dictionaries";
import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { tParams } from "../layout";
import { Metadata } from "next";
import { LOCALES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Prints",
  alternates: {
    canonical: `https://digitalax.xyz/prints/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/prints/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function Prints({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <PrintsEntry dict={dict} />;
}
