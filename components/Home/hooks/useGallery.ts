import { useEffect, useRef, useState } from "react";
import { getGallery } from "@/graphql/subgraph/queries/collections";
import { Creation } from "@/components/Distro/types/distro.types";
import fetchIPFSJSON from "@/lib/lens/helpers/fetchIPFSJson";
const useGallery = () => {
  const shop = useRef<null | HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [more, setMore] = useState<boolean>(false);
  const [gallery, setGallery] = useState<Creation[]>([]);
  const [galleryLoading, setGalleryLoading] = useState<boolean>(false);

  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGallery = async () => {
    setGalleryLoading(true);
    try {
      const data = await getGallery(
        105,
        [0, 100, 50, 30, 200].sort(() => Math.random() - 0.5)[0],
        ["asc", "desc"].sort(() => Math.random() - 0.5)[0]
      );

      const promises = await Promise.all(
        data?.data?.collectionCreateds?.map(
          async (item: { uri: string; collectionMetadata: {} }) => {
            if (!item?.collectionMetadata) {
              const collectionMetadata = await fetchIPFSJSON(item?.uri);
              return {
                ...item,
                collectionMetadata,
              };
            } else {
              return item;
            }
          }
        )
      );

      setGallery(promises?.sort(() => Math.random() - 0.5));
    } catch (err: any) {
      console.error(err.message);
    }

    setGalleryLoading(false);
  };

  useEffect(() => {
    if (gallery?.length < 1) {
      handleGallery();
    }
  }, []);

  return {
    currentIndex,
    setCurrentIndex,
    setMore,
    more,
    handleShop,
    shop,
    gallery,
    galleryLoading,
  };
};

export default useGallery;
