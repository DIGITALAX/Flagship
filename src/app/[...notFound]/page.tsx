import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";
import NotFoundEntry from "../componentes/Common/modules/NotFoundEntry";
import { getDictionary } from "../[lang]/dictionaries";

export default async function NotFound() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <NotFoundEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
