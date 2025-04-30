import { Suspense } from "react";
import { getDictionary } from "./[lang]/dictionaries";
import Wrapper from "./componentes/Common/modules/Wrapper";
import Entry from "./componentes/Common/modules/Entry";

export default async function IndexPage() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <Entry dict={dict} />
        </Suspense>
      }
    />
  );
}
