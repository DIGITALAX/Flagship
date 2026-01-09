import { NextResponse } from "next/server";
import {
  IMAGE_LOGS,
  INFURA_GATEWAY_INTERNAL,
  LOCALES,
  POSTER_IMAGES,
  PRINT_IMAGES,
  TEMPLATES,
  TITLES,
  TV_IMAGES,
} from "../lib/constants";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://digitalax.xyz";

const PATHS = [
  {
    route: "/",
    images: [
      "QmXnDtWEvHA2PNZeQWxVd1KotF5JGvfBp4hbcvgTuE3pdk",
      "QmXdpVMP9c1whwfmq8J4qtcHUTMwTu2HK3ekKaZ2DfLnPQ",
      "QmVQs31SSv6GzaYfvRcziPkisVFbvXxK9SAbDYvFSG7gj3",
      "QmPDvX3Gs8xreaNwDi3fPUmwg37niWb6TaADrLVUTn2y2Y",
      "QmPB3KnfK1SbW3B8eLeKmss1HtM3u2ZXqgPNSYDahp2rqA",
      "QmdDJzGxzNGamFZQRnL8dN6PHtTFV1eFhiB9hVc84JfNAd",
      "QmewB33fdwgapHxEB6TJMyikF6bb8jJjYjGE4AEvMR44sH",
      "QmVQ1NGyfHmMCD48aWbs7yAgeC8ch6oWm8kSYeikuagXp8",
      "QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS",
      "QmNmK82BkospCqyQjzHySwzEZXpzu4KwzDSWMtpppNW8tk",
      "QmUaSzTcuoPWqHmdU4pu58maAZ3876JddCeRqPKTMVJ8DC",
      "QmZ1hBVXHWK37h8bPKGqpLGogWwYVTTYTfkPp5DTmvK1ZT",
      "QmXBoTMp9NKviigEfuVLtMvP3HsNRQUpQ7f9VpJzmry5dr",
      "QmfUUvVP14gUbV9iG3WYNEudCDhEE4c91uCxcWGLjp7w1G",
      "QmPRaPTK9pq511nwNFEHpVW22qrdpcNaHy7gaULDddztDy",
      "QmPaQy4y1PCxhsvewbP2BdRmbWhwupZvqDQkCqNVdm6sCg",
      "QmVQs31SSv6GzaYfvRcziPkisVFbvXxK9SAbDYvFSG7gj3",
      "QmUE1a7yAL1N6qsQ8vrBMRKKy46tEFwqBJXDAe2e7uHpPe",
      "QmVfYf8fnrfDPinTasbeN4SAiiGLCg47fAS8Edegg3168c",
      "QmfAQag73312yoCehj62rLTMyCMWxNE5rK6ikHGDdXqHn7",
      "QmPRURdUCv5ArkhqyhHn6aicHbQVMATDyL1wzmT55bK2Nr",
      "QmTLX8JxYry2TZgwdbb4DL6HBvUsESgAC2mEhrQBBk4K3a",
      "QmZ9jPeuD1SNRuFx2SjQSJGSR445FoMHV3WU9ddW7S7mb7",
      "QmQvYzGUxZ65CNL7GvcqphAeBegJ19r23nmu9uHmPQ6Dc6",
      "QmbdN9PHYU5Lf467WqXRp32S4jp3kRnJYzS6EgztmEvUnT",
      "Qmc1G3A1AdiUyjWsbX9MU8jinapN7Cy1mHb9kFsieysSno",
      "Qmbuv1tSD437oRELndaJHEjjGE73xgjJFaFdWzVCrtbADn",
      "QmQ81mzd6V5b57rXabEQQaWEg6zSxVY3tLHafx3XGVm14s",
      "QmYXNG1QarpiSBaVd6RYj4HEKgngt49zPMWdRxQQKdB9va",
      "QmNcrdusMU9qch4imSkCFtgSNXHVhd8fin8Ur6ySLKFERz",
    ].map((image, i) => ({
      image,
      title: TITLES[i],
    })),
  },
  {
    route: "/build-log/",
    images: IMAGE_LOGS?.map((image) => ({
      image: image?.image,
      title: image?.title?.en,
    })),
  },
  {
    route: "/distro-kit/",
    images: [...TEMPLATES, ...TV_IMAGES].map((image, i) => ({
      image,
      title: TITLES[i + 30],
    })),
  },
  {
    route: "/computational-manufacturing/",
    images: [
      "QmfSDeJw2C4ND1XTZWAhqFeVnV5doMX5q5KqQKz68BADrj",
      "QmfSDeJw2C4ND1XTZWAhqFeVnV5doMX5q5KqQKz68BADrj",
      "QmTy43sdwJBFykgB26gZUdqDHgKp1R1J1RnWkpkswuWHuK",
      "QmQo7UcEfDKVyx8jAHUJ6v3DS1nZMU3dKX5pTvNfzSt576",
      "QmXgKFHuwPHsmoamNCMS4KHqXpevmYLmP8h4K4nofDcdpT",
      "QmXVAhhmLd1gYKtEuVW1SbLp6chmZBs255KpWLWETxkPTZ",
      "QmPEMJyuJYMK9Yb8LwH9xKwaBSJ6TY3S2cFHH1f3d4Zp9r",
      "Qma2R8sZ5b9kTQFALYjUf3sSAuZyu6VZ6aZE4BwaMtZxNL",
      "QmZ2Lwrtvnnk255TAoREWPPgsZKsuEiTv1KZTkvHx4q6M8",
      "Qmf1GPXsmKCvGCKHJSzGDpKZxq3ydL5eECMCz5AyRmjCAy",
      "QmQhYhyn3R1iMJqFq1xZig1rkjT1iRAJaThJnEvPR3Luav",
      "QmSu7jUdz1QTjLfhLj9gFxzsZg8AaE7vwsGg82PG7tJ7mP",
      "QmfSDeJw2C4ND1XTZWAhqFeVnV5doMX5q5KqQKz68BADrj",
      "QmTUZJMFRzJXHdfRqDrGoN92khXAY9FmCXS8rDpWtDauo5",
      "QmQ6gzRicLT4nACXJRqmhVUoGrt6W6jHWzxLA9xXGunXhS",
      "QmNscSpsMFdHX7bbbzS2YNLiHnW2c9Th4YC6GY4hf9a8dY",
      "QmSE4rYUB4tNEys34eZSUDVQC6gM7VRmq7Hn8oMsZwZ4KC",
      "QmPzJKUUt6CbXsKwAgGL3jGumPpEons1rg3arZhrP7CBVL",
      "QmaU61xGDsQmLMni4M34rwE6E1vdEHV4HUut7vKhosgRyX",
      "QmeJWEwJJr1MBsAZgBZnWPPntymJTaEgo7pUC6rb9cxi8J",
      "QmSu7jUdz1QTjLfhLj9gFxzsZg8AaE7vwsGg82PG7tJ7mP",
    ].map((image, i) => ({
      image,
      title: TITLES[i + 121],
    })),
  },
  {
    route: "/prints/",
    images: [...PRINT_IMAGES, ...POSTER_IMAGES].map((image, i) => ({
      image,
      title: TITLES[i + 142],
    })),
  },
  {
    route: "/tokens/",
    images: [
      {
        title: "OT-P53",
        image: "QmNkwQdKLVQQdrEtcFeHpF2dLzrxU3uuWrKUEF1Trdf3B3",
      },
      {
        title: "VNO-7L4",
        image: "QmWZVBQLd8XWWkiSQiXcTsBcx4mnDkbGCQwobbdoY941Hj",
      },
      {
        title: "ENI-GX19",
        image: "QmWzhzMy9XQn1HFgKCT3t7caDkVoGWBdh2o7vcL5hkZbdM",
      },
      {
        title: "CRY-M0D7",
        image: "QmZ525CgjsuFTfrVj9xULtkL4ntqQxRCFS3ZS7Dj42xGHr",
      },
      {
        title: "SIG-A2C",
        image: "QmVtfTBZg3A1rrwJxc4sg9gsG7GJa3Q3PBUZi76F1izThQ",
      },
      {
        title: "OT-P53 Poster",
        image: "QmRbrWWpD6E77KvYj9thKwmWMesxxieqLmNE5Va2nZ9Qe2",
      },
      {
        title: "VNO-7L4 Poster",
        image: "QmNxoYwkyMQBzJnjd2xASstM1bYGWYgmnkdd23bKL1T75A",
      },
      {
        title: "ENI-GX19 Poster",
        image: "QmRXf8a7HGrjArjRrpVfqLw5kq2xPCGuUy53c7vg4QgDzd",
      },
      {
        title: "CRY-M0D7 Poster",
        image: "QmSKgwMv3YehejfQzi1jBChZu8znJmrKVPE1w2ZpgozTi7",
      },
      {
        title: "SIG-A2C Poster",
        image: "QmX79fkoiXBsRZysBkYhNhetzv6HT58baSbZ4wp86xTHbn",
      },
      {
        title: "Privacy Poster",
        image: "https://chromadin.xyz/api/infura/QmenggnmziozxNAazvbPH7Dafh2MxT87DqXiYiykRgDJm2",
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
  const urls = PATHS.flatMap((path) => {
    const alternates = buildAlternates(path.route);
    const images = path?.images
      .map((cid) => {
        const url =
          typeof cid?.image === "string" && cid.image.startsWith("http")
            ? cid.image
            : `${INFURA_GATEWAY_INTERNAL}${cid?.image}`;
        return `
      <image:image>
        <image:loc>${url}</image:loc>
        <image:title><![CDATA[${path?.route} ${cid?.title}  | DIGITALAX]]></image:title>
        <image:caption><![CDATA[${path?.route} ${cid?.title}  | DIGITALAX]]></image:caption>
      </image:image>
    `;
      })
      .join("");

    return buildLocs(path.route).map(
      (loc) => `
      <url>
        <loc>${loc}</loc>
        ${alternates}
        ${images}
      </url>
    `
    );
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
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
