import { getDictionary } from "../dictionaries";
import NotFoundEntry from "../../componentes/Common/modules/NotFoundEntry";
import { tParams } from "../layout";


export default async function NotFound({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <NotFoundEntry dict={dict} />;
}
