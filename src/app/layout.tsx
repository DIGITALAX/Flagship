import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export type tParams = Promise<{ lang: string }>;

export const metadata: Metadata = {
  title: "DIGITALAX",
  metadataBase: new URL("https://www.digitalax.xyz"),
  description: "Emancipatory Lifestyle Tech.",
  twitter: {
    description: "Emancipatory Lifestyle Tech.",
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
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
