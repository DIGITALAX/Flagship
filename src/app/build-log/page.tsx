import BuildLogEntry from "@/app/componentes/Build/modules/BuildEntry";
import { getDictionary } from "../[lang]/dictionaries";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { Suspense } from "react";

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
