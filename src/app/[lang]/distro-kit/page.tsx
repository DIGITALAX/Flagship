import DistroKitEntry from "@/app/componentes/Distro/modules/DistroKitEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";

export default async function DistroKit({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <DistroKitEntry dict={dict} />;
}
