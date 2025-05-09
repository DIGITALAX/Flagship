import { useEffect, useRef, useState } from "react";
import { Creation } from "../types/gallery.types";
import fetchIPFSJSON from "@/app/lib/helpers/fetchIPFSJson";
import { getGallery } from "../../../../../graphql/queries/getGallery";

const useGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [more, setMore] = useState<boolean>(false);
  const [gallery, setGallery] = useState<Creation[]>([]);
  const [galleryLoading, setGalleryLoading] = useState<boolean>(false);

  const handleGallery = async (): Promise<void> => {
    setGalleryLoading(true);
    try {
      const data = await getGallery(
        105,
        [10, 80, 150, 300].sort(() => Math.random() - 0.5)[0],
        ["asc", "desc"].sort(() => Math.random() - 0.5)[0]
      );


      const promises = await Promise.all(
        data?.data?.collectionCreateds?.map(
          async (item: { uri: string; metadata: {} }) => {
            if (!item?.metadata) {
              const metadata = await fetchIPFSJSON(item?.uri);
              return {
                ...item,
                metadata,
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
    gallery,
    galleryLoading,
  };
};

export default useGallery;
