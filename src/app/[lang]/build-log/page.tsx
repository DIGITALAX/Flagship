import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import BuildLogEntry from "@/app/componentes/Build/modules/BuildEntry";

export default async function BuildLog({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <BuildLogEntry dict={dict} />;
}
