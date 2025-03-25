import MonaEntry from "@/app/componentes/Mona/modals/MonaEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";

export default async function Mona({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <MonaEntry dict={dict} />;
}
