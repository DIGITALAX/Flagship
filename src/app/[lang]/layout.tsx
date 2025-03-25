import type { Metadata } from "next";
import "./../globals.css";
import Modals from "../componentes/Modals/modules/Modals";
import Providers from "../providers";
import Footer from "../componentes/Common/modules/Footer";

export type tParams = Promise<{ lang: string }>;

export const metadata: Metadata = {
  title: "DIGITALAX",
  metadataBase: new URL("https://www.digitalax.xyz"),
  description: "Emancipatory Lifestyle Tech.",
  twitter: {
    creator: "@digitalax_",
    site: "@digitalax_",
    card: "summary_large_image",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "www.digitalax.xyz",
    "www.f3manifesto.xyz",
    "Women",
    "Life",
    "Freedom",
  ],
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return (
    <html>
      <body>
        <Providers>
          <div
            className="min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden flex flex-col"
            id="noScroll"
          >
            {children}
            <Footer params={params} />
          </div>
          <Modals />
        </Providers>
      </body>
    </html>
  );
}
