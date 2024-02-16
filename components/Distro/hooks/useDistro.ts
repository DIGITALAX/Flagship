import { useEffect, useState } from "react";
import { TV_IMAGES } from "@/lib/constants";

const useDistro = () => {
  const [blenderPage, setBlenderPage] = useState<number>(0);
  const [tvImages, setTvImages] = useState<string[]>(
    TV_IMAGES?.sort(() => Math.random() - 0.5)?.slice(0, 4)
  );

  useEffect(() => {
    const scrollElement = document.getElementById("scrollMicro");
    if (scrollElement) {
      scrollElement.scrollLeft =
        (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
    }
  }, []);

  return {
    blenderPage,
    setBlenderPage,
    tvImages,
    setTvImages
  };
};

export default useDistro;
