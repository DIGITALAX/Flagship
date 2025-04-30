import Modals from "../componentes/Modals/modules/Modals";
import Footer from "../componentes/Common/modules/Footer";

export type tParams = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return (
    <>
      <div
        className="min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden flex flex-col"
        id="noScroll"
      >
        {children}
        <Footer params={params} />
      </div>
      <Modals params={params} />
    </>
  );
}
