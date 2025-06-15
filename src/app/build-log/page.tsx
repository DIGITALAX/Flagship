import BuildLogEntry from "@/app/componentes/Build/modules/BuildEntry";
import { getDictionary } from "../[lang]/dictionaries";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { Suspense } from "react";
import { Metadata } from "next";
import { LOCALES } from "../lib/constants";

export const metadata: Metadata = {
  title: "Build Log",
  alternates: {
    canonical: `https://digitalax.xyz/build-log/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/build-log/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function BuildLog() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <BuildLogEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
