import { INFURA_GATEWAY } from "../constants";

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

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };

  if (title) schema.name = title;
  if (description) schema.description = description;
  if (creator) schema.creator = { "@type": "Person", name: creator };
  if (tags && Array.isArray(tags) && tags.length > 0) schema.keywords = tags.join(", ");
  if (datePublished) schema.datePublished = datePublished;

  return schema;
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

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    uploadDate: datePublished || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };

  if (resolvedThumbnail) schema.thumbnailUrl = resolvedThumbnail;
  if (title) schema.name = title;
  if (description) schema.description = description;
  if (creator) schema.creator = { "@type": "Person", name: creator };
  if (tags && Array.isArray(tags) && tags.length > 0) schema.keywords = tags.join(", ");
  if (datePublished) schema.datePublished = datePublished;
  if (duration) schema.duration = duration;

  return schema;
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

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    contentUrl: resolvedUrl,
    url: resolvedUrl,
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };

  if (title) schema.name = title;
  if (description) schema.description = description;
  if (creator) schema.creator = { "@type": "Person", name: creator };
  if (tags && Array.isArray(tags) && tags.length > 0) schema.keywords = tags.join(", ");
  if (datePublished) schema.datePublished = datePublished;
  if (duration) schema.duration = duration;

  return schema;
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

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    url,
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: "https://digitalax.xyz/",
    },
  };

  if (title) schema.name = title;
  if (description) schema.description = description;
  if (creator) schema.creator = { "@type": "Person", name: creator };
  if (resolvedImages && resolvedImages.length > 0) schema.image = resolvedImages;
  if (video) {
    schema.video = generateVideoJsonLd({
      url: video,
      title,
      description,
      creator,
      tags,
      datePublished,
    });
  }
  if (audio) {
    schema.audio = generateAudioJsonLd({
      url: audio,
      title,
      description,
      creator,
      tags,
      datePublished,
    });
  }
  if (tags && Array.isArray(tags) && tags.length > 0) schema.keywords = tags.join(", ");
  if (datePublished) schema.datePublished = datePublished;

  return schema;
};