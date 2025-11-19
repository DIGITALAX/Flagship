import CompEntry from "@/app/componentes/Comp/modals/CompEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { LOCALES } from "@/app/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computational Manufacturing",
  alternates: {
    canonical: `https://digitalax.xyz/computational-manufacturing/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/computational-manufacturing/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function ComputationalManufacturing({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <CompEntry dict={dict} />;
}
