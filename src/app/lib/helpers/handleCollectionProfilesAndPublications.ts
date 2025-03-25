import fetchIPFSJSON from "./fetchIPFSJson";
import toHexWithLeadingZero from "./leadingZero";
import { Creation } from "@/app/componentes/Distro/types/distro.types";
import { fetchPost } from "@lens-protocol/client/actions";
import { Account, Post, PublicClient } from "@lens-protocol/client";

const handleCollectionProfilesAndPublications = async (
  collections: Creation[],
  lensClient: PublicClient
): Promise<Creation[] | undefined> => {
  try {
    const promises = [...(collections || [])]?.map(
      async (collection: Creation) => {
        if (collection?.profileId && collection?.pubId) {
          const publication = await fetchPost(lensClient, {
            post: `${toHexWithLeadingZero(
              Number(collection?.profileId)
            )}-${toHexWithLeadingZero(Number(collection?.pubId))}`,
          });

          if (!publication?.isOk()) {
            return;
          }

          const coll = await collectionFixer(collection);
          return {
            ...coll,
            profile: publication?.value?.author as Account,
            publication: publication?.value as Post,
          } as Creation;
        }
      }
    );
    const colls = await Promise.all(promises);
    return colls?.filter(Boolean) as Creation[];
  } catch (err: any) {
    console.error(err.message);
  }
};

export default handleCollectionProfilesAndPublications;

const collectionFixer = async (collection: Creation): Promise<Creation> => {
  let ipfs = {};
  if (!collection?.collectionMetadata?.title && collection?.pubId) {
    let data = await fetchIPFSJSON(collection?.uri);
    const { cover, ...rest } = data;
    ipfs = {
      collectionMetadata: {
        ...rest,
        mediaCover: rest?.cover,
      },
    };
  }
  const coll = {
    ...collection,
    ...ipfs,
  };

  return {
    ...coll,
    collectionMetadata: {
      ...coll?.collectionMetadata,
      sizes:
        typeof coll?.collectionMetadata?.sizes === "string"
          ? (coll?.collectionMetadata?.sizes as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.sizes,
      colors:
        typeof coll?.collectionMetadata?.colors === "string"
          ? (coll?.collectionMetadata?.colors as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.colors,
      mediaTypes:
        typeof coll?.collectionMetadata?.mediaTypes === "string"
          ? (coll?.collectionMetadata?.mediaTypes as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.mediaTypes,
      access:
        typeof coll?.collectionMetadata?.access === "string"
          ? (coll?.collectionMetadata?.access as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.access,
      communities:
        typeof coll?.collectionMetadata?.communities === "string"
          ? (coll?.collectionMetadata?.communities as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.communities,
      tags:
        typeof coll?.collectionMetadata?.tags === "string"
          ? (coll?.collectionMetadata?.tags as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.collectionMetadata?.tags,
    },
    prices: coll?.prices?.map((price: string) =>
      String(Number(price) / 10 ** 18)
    ),
  } as Creation;
};
