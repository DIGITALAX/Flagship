import { Metadata } from "next";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import BuildLogEntry from "@/app/componentes/Build/modules/BuildEntry";
import { LOCALES } from "@/app/lib/constants";

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


export default async function BuildLog({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <BuildLogEntry dict={dict} />;
}
