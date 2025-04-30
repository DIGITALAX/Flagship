import MonaEntry from "@/app/componentes/Mona/modals/MonaEntry";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";

export default async function Mona() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <MonaEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
