import { NextResponse } from "next/server";
import {
  INFURA_GATEWAY,
  INFURA_GATEWAY_INTERNAL,
  LOCALES,
} from "../lib/constants";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://digitalax.xyz";

const VIDEO_PATHS = [
  {
    route: "/",
    videos: [
      {
        title: "DIGITALAX Feature 1",
        description: "DIGITALAX homepage feature video.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmaU44DD7KEPAfQfrYB1hGs8KJVr2G2Ua7BzkNd9iRcC47`,
        thumbnailLoc: `${baseUrl}/opengraph-image.png`,
      },
      {
        title: "DIGITALAX Feature 2",
        description: "DIGITALAX homepage feature video.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmQoDj9jjU81mgBfdXT8P83EZmyrXRQmL6scNGgaMTivys`,
        thumbnailLoc: `${baseUrl}/opengraph-image.png`,
      },
      {
        title: "DIGITALAX Feature 3",
        description: "DIGITALAX homepage feature video.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmSztbqHjXyghFm6xr9vT89Yw68aq6BZPsEu9g5eGBNmZG`,
        thumbnailLoc: `${baseUrl}/opengraph-image.png`,
      },
    ],
  },
  {
    route: "/tokens/",
    videos: [
      {
        title: "OT-P53",
        description: "DIGITALAX token media.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmaR4Aw5L6mH5TKK4ghhc5TxHkU7Ydo8LpFDfzoXt3Y1Yc`,
        thumbnailLoc: `${INFURA_GATEWAY}/ipfs/QmRbrWWpD6E77KvYj9thKwmWMesxxieqLmNE5Va2nZ9Qe2`,
      },
      {
        title: "VNO-7L4",
        description: "DIGITALAX token media.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/Qmb2YwKFLPucXoKJVDBtM55qmQKzQ6PZvJ6Wbme6gqBtwL`,
        thumbnailLoc: `${INFURA_GATEWAY}/ipfs/QmNxoYwkyMQBzJnjd2xASstM1bYGWYgmnkdd23bKL1T75A`,
      },
      {
        title: "ENI-GX19",
        description: "DIGITALAX token media.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmcaH88ccwLPVQ91ZDNjJMrq3QN7JkyxmBZwTq59bKHm8s`,
        thumbnailLoc: `${INFURA_GATEWAY}/ipfs/QmRXf8a7HGrjArjRrpVfqLw5kq2xPCGuUy53c7vg4QgDzd`,
      },
      {
        title: "CRY-M0D7",
        description: "DIGITALAX token media.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmbYp2y6NcCthYsotFJZMqw5G19fJy1gzqcCKAgigX3zFz`,
        thumbnailLoc: `${INFURA_GATEWAY}/ipfs/QmSKgwMv3YehejfQzi1jBChZu8znJmrKVPE1w2ZpgozTi7`,
      },
      {
        title: "SIG-A2C",
        description: "DIGITALAX token media.",
        contentLoc: `${INFURA_GATEWAY}/ipfs/QmYo9ZgbAWMTPA99dSDLcf4LZcQQXDv63pPcK1ddDssXtZ`,
        thumbnailLoc: `${INFURA_GATEWAY}/ipfs/QmX79fkoiXBsRZysBkYhNhetzv6HT58baSbZ4wp86xTHbn`,
      },
      {
        title: "Privacy",
        description: "DIGITALAX privacy media.",
        contentLoc:
          "https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm",
        thumbnailLoc:
          "https://chromadin.xyz/api/infura/QmenggnmziozxNAazvbPH7Dafh2MxT87DqXiYiykRgDJm2",
      },
    ],
  },
  {
    route: "/distro-kit/",
    videos: [
      {
        title: "Distro Kit",
        description: "DIGITALAX distro kit video.",
        contentLoc: `${INFURA_GATEWAY_INTERNAL}QmQ4M9Xou5oemWyMKVTU9HrkVdMqNNy2r5tTxxomqnnpL7`,
        thumbnailLoc: `${baseUrl}/opengraph-image.png`,
      },
    ],
  },
];

const buildAlternates = (route: string) => {
  const alternates = LOCALES.map(
    (locale) => `
        <xhtml:link 
          rel="alternate" 
          hreflang="${locale}" 
          href="${baseUrl}/${locale}${route}" />
      `
  ).join("");

  const xDefault = `
      <xhtml:link 
        rel="alternate" 
        hreflang="x-default" 
        href="${baseUrl}${route}" />
    `;

  return `${alternates}${xDefault}`;
};

const buildLocs = (route: string) => [
  `${baseUrl}${route}`,
  ...LOCALES.map((locale) => `${baseUrl}/${locale}${route}`),
];

export async function GET() {
  const urls = VIDEO_PATHS.flatMap((path) => {
    const alternates = buildAlternates(path.route);
    const videos = path.videos
      .map(
        (video) => `
      <video:video>
        <video:title><![CDATA[${video.title}]]></video:title>
        <video:description><![CDATA[${video.description}]]></video:description>
        <video:thumbnail_loc>${video.thumbnailLoc}</video:thumbnail_loc>
        <video:content_loc>${video.contentLoc}</video:content_loc>
      </video:video>
    `
      )
      .join("");

    return buildLocs(path.route).map(
      (loc) => `
      <url>
        <loc>${loc}</loc>
        ${alternates}
        ${videos}
      </url>
    `
    );
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
