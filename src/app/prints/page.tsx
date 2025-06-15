import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";
import { Metadata } from "next";
import { LOCALES } from "../lib/constants";

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
