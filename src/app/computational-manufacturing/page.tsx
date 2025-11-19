import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";
import { Metadata } from "next";
import { LOCALES } from "../lib/constants";
import CompEntry from "../componentes/Comp/modals/CompEntry";

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


export default async function ComputationalManufacturing() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <CompEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
