import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";
import { Metadata } from "next";
import { LOCALES } from "../lib/constants";
import TokensEntry from "../componentes/Tokens/modules/TokensEntry";

export const metadata: Metadata = {
  title: "Team & Tokens",
  alternates: {
    canonical: `https://digitalax.xyz/tokens/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/tokens/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function Tokens() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <TokensEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
