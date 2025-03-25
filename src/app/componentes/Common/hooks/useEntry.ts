import { useRef } from "react";

const useEntry = () => {
  const shop = useRef<null | HTMLDivElement>(null);

  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return {
    shop,
    handleShop,
  };
};

export default useEntry;
