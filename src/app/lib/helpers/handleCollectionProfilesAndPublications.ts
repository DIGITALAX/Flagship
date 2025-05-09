import fetchIPFSJSON from "./fetchIPFSJson";
import { fetchPost } from "@lens-protocol/client/actions";
import { Account, Post, PublicClient } from "@lens-protocol/client";
import { Creation } from "@/app/componentes/Gallery/types/gallery.types";

const handleCollectionProfilesAndPublications = async (
  collections: Creation[],
  lensClient: PublicClient
): Promise<Creation[] | undefined> => {
  try {
    const promises = [...(collections || [])]?.map(
      async (collection: Creation) => {
        if (collection?.postId) {
          const publication = await fetchPost(lensClient, {
            post: collection?.postId,
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
  if (!collection?.metadata?.title && collection?.postId) {
    let data = await fetchIPFSJSON(collection?.uri);
    const { cover, ...rest } = data;
    ipfs = {
      metadata: {
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
    metadata: {
      ...coll?.metadata,
      sizes:
        typeof coll?.metadata?.sizes === "string"
          ? (coll?.metadata?.sizes as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.metadata?.sizes,
      colors:
        typeof coll?.metadata?.colors === "string"
          ? (coll?.metadata?.colors as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.metadata?.colors,
      mediaTypes:
        typeof coll?.metadata?.mediaTypes === "string"
          ? (coll?.metadata?.mediaTypes as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.metadata?.mediaTypes,
      access:
        typeof coll?.metadata?.access === "string"
          ? (coll?.metadata?.access as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.metadata?.access,
      tags:
        typeof coll?.metadata?.tags === "string"
          ? (coll?.metadata?.tags as any)
              ?.split(",")
              ?.map((word: string) => word.trim())
              ?.filter((word: string) => word.length > 0)
          : coll?.metadata?.tags,
    },
    price:  String(Number(coll?.price) / 10 ** 18),
  } as Creation;
};
