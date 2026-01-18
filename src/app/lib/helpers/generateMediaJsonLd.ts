import { INFURA_GATEWAY, IPFS_REGEX } from "../constants";

interface ImageJsonLdParams {
  url: string;
  title?: string;
  description?: string;
  creator?: string;
  tags?: string[];
  datePublished?: string;
}

interface VideoJsonLdParams {
  url: string;
  thumbnailUrl?: string;
  title?: string;
  description?: string;
  creator?: string;
  tags?: string[];
  datePublished?: string;
  duration?: string;
}

interface AudioJsonLdParams {
  url: string;
  title?: string;
  description?: string;
  creator?: string;
  tags?: string[];
  datePublished?: string;
  duration?: string;
}

export const generateImageJsonLd = ({
  url,
  title,
  description,
  creator,
  tags,
  datePublished,
}: ImageJsonLdParams) => {
  const resolvedUrl = url.includes("ipfs://")
    ? `${INFURA_GATEWAY}/ipfs/${url.split("ipfs://")[1]}`
    : url.includes("ar://")
    ? `https://arweave.net/${url.split("ar://")[1]?.replace(/"/g, "")?.trim()}`
    : url;

  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    ...(title && { name: title }),
    ...(description && { description }),
    ...(creator && {
      creator: {
        "@type": "Person",
        name: creator,
      },
    }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
    ...(datePublished && { datePublished }),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };
};

export const generateVideoJsonLd = ({
  url,
  thumbnailUrl,
  title,
  description,
  creator,
  tags,
  datePublished,
  duration,
}: VideoJsonLdParams) => {
  const resolvedUrl = url.includes("ipfs://")
    ? `${INFURA_GATEWAY}/ipfs/${url.split("ipfs://")[1]}`
    : url.includes("ar://")
    ? `https://arweave.net/${url.split("ar://")[1]?.replace(/"/g, "")?.trim()}`
    : url;

  const resolvedThumbnail = thumbnailUrl
    ? thumbnailUrl.includes("ipfs://")
      ? `${INFURA_GATEWAY}/ipfs/${thumbnailUrl.split("ipfs://")[1]}`
      : thumbnailUrl.includes("ar://")
      ? `https://arweave.net/${thumbnailUrl.split("ar://")[1]?.replace(/"/g, "")?.trim()}`
      : thumbnailUrl
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    ...(resolvedThumbnail && { thumbnailUrl: resolvedThumbnail }),
    ...(title && { name: title }),
    ...(description && { description }),
    ...(creator && {
      creator: {
        "@type": "Person",
        name: creator,
      },
    }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
    ...(datePublished && { datePublished }),
    ...(duration && { duration }),
    uploadDate: datePublished || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };
};

export const generateAudioJsonLd = ({
  url,
  title,
  description,
  creator,
  tags,
  datePublished,
  duration,
}: AudioJsonLdParams) => {
  const resolvedUrl = url.includes("ipfs://")
    ? `${INFURA_GATEWAY}/ipfs/${url.split("ipfs://")[1]}`
    : url.includes("ar://")
    ? `https://arweave.net/${url.split("ar://")[1]?.replace(/"/g, "")?.trim()}`
    : url;

  return {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    ...(title && { name: title }),
    ...(description && { description }),
    ...(creator && {
      creator: {
        "@type": "Person",
        name: creator,
      },
    }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
    ...(datePublished && { datePublished }),
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };
};

export const generateCreativeWorkJsonLd = ({
  url,
  title,
  description,
  creator,
  images,
  video,
  audio,
  tags,
  datePublished,
}: {
  url: string;
  title?: string;
  description?: string;
  creator?: string;
  images?: string[];
  video?: string;
  audio?: string;
  tags?: string[];
  datePublished?: string;
}) => {
  const resolvedImages = images?.map((img) =>
    img.includes("ipfs://")
      ? `${INFURA_GATEWAY}/ipfs/${img.split("ipfs://")[1]}`
      : img.includes("ar://")
      ? `https://arweave.net/${img.split("ar://")[1]?.replace(/"/g, "")?.trim()}`
      : img
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    url,
    ...(title && { name: title }),
    ...(description && { description }),
    ...(creator && {
      creator: {
        "@type": "Person",
        name: creator,
      },
    }),
    ...(resolvedImages && resolvedImages.length > 0 && { image: resolvedImages }),
    ...(video && {
      video: generateVideoJsonLd({
        url: video,
        title,
        description,
        creator,
        tags,
        datePublished,
      }),
    }),
    ...(audio && {
      audio: generateAudioJsonLd({
        url: audio,
        title,
        description,
        creator,
        tags,
        datePublished,
      }),
    }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
    ...(datePublished && { datePublished }),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };
};