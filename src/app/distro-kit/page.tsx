import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../componentes/Common/modules/Wrapper";

export default async function DistroKit() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <DistroKitEntry dict={dict} />
        </Suspense>
      }
    />
  );
}
