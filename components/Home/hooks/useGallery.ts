import { useRef, useState } from "react";
const useGallery = () => {
  const shop = useRef<null | HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [more, setMore] = useState<boolean>(false);

  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return {
    currentIndex,
    setCurrentIndex,
    setMore,
    more,
    handleShop,
    shop,
  };
};

export default useGallery;
