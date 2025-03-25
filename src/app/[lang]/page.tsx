import Entry from "../componentes/Common/modules/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";


export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <Entry dict={dict} />;
}
