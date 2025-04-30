import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";

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
