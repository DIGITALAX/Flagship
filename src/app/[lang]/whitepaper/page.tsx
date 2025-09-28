import Head from "next/head";

export default function Whitepaper() {
  return (
    <div className="relative w-full h-screen flex">
      <Head>
        <title>Whitepaper V3</title>
      </Head>
      <embed
        className="w-full h-full relative flex"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
}
