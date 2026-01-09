import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper V3",
  description: "DIGITALAX Whitepaper V3.",
  alternates: {
    canonical: "https://digitalax.xyz/whitepaper/",
  },
  openGraph: {
    title: "Whitepaper V3 | DIGITALAX",
    description: "DIGITALAX Whitepaper V3.",
    url: "https://digitalax.xyz/whitepaper/",
    siteName: "DIGITALAX",
    images: [
      {
        url: "https://digitalax.xyz/opengraph-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepaper V3 | DIGITALAX",
    description: "DIGITALAX Whitepaper V3.",
    site: "@digitalax_",
    creator: "@digitalax_",
    images: ["https://digitalax.xyz/opengraph-image.png"],
  },
};

export default function Whitepaper() {
  return (
    <div className="relative w-full h-screen flex">
      <embed
        className="w-full h-full relative flex"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
}
