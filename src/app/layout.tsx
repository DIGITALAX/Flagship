import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { LOCALES } from "./lib/constants";

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
  alternates: {
    canonical: `https://digitalax.xyz/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://digitalax.xyz/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DIGITALAX",
              url: "https://www.digitalax.xyz",
              founder: {
                "@type": "Person",
                name: "Emma-Jane MacKinnon-Lee",
                url: "https://www.emmajanemackinnonlee.com",
                sameAs: [
                  "https://twitter.com/emmajane1313",
                  "https://medium.com/@casadeespejos",
                  "https://www.flickr.com/photos/emmajanemackinnonlee/",
                  "https://www.syntheticfutures.xyz",
                  "https://www.web3fashion.xyz",
                  "https://www.emancipa.xyz",
                  "https://www.highlangu.xyz",
                  "https://www.digitalax.xyz",
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
