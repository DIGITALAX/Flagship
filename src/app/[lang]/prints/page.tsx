import { getDictionary } from "../dictionaries";
import PrintsEntry from "@/app/componentes/Prints/PrintsEntry";
import { tParams } from "../layout";


export default async function Prints({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <PrintsEntry dict={dict} />;
}
