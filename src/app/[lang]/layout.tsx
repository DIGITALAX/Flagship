import Modals from "../componentes/Modals/modules/Modals";
import Footer from "../componentes/Common/modules/Footer";
import { RTL_LOCALES } from "../lib/constants";

export type tParams = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "br" }, { lang: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  const { lang } = await params;
  const dir = RTL_LOCALES.includes(lang) ? "rtl" : "ltr";

  return (
    <div dir={dir} lang={lang} className="contents">
      <div
        className="min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden flex flex-col"
        id="noScroll"
      >
        {children}
        <Footer params={params} />
      </div>
      <Modals params={params} />
    </div>
  );
}
