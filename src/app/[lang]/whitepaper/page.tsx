import Head from "next/head";

export default function Whitepaper() {
  return (
    <div className="relative w-full h-screen flex">
      <Head>
        <title>Whitepaper V3</title>
        <meta name="og:url" content="https://www.digitalax.xyz/whitepaper" />
        <meta name="og:title" content="Whitepaper V3" />
        <meta name="og:description" content="Whitepaper V3" />
        <meta name="og:image" content="https://www.digitalax.xyz/card.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:url" content="https://www.digitalax.xyz/whitepaper" />
        <meta name="og:image" content="https://www.digitalax.xyz/whitepaper" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalax" />
        <meta name="twitter:creator" content="@digitalax" />
        <meta
          name="twitter:image"
          content="https://www.digitalax.xyz/whitepaper"
        />
        <meta
          name="twitter:url"
          content="https://www.digitalax.xyz/whitepaper"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://www.digitalax.xyz/whitepaper" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <embed
        className="w-full h-full relative flex"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
}
