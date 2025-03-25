import { IMAGE_LOGS } from "@/app/lib/constants";
import { useEffect, useRef, useState } from "react";

const useLog = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [allowScroll, setAllowScroll] = useState(false);
  const accumulatedScroll = useRef(0);

  function updateDisplayedImage(index: number): void {
    if (index >= 0 && index < IMAGE_LOGS.length) {
      setCurrentImage(index);
    }
  }

  function handleFakeScroll(event: WheelEvent): void {
    if (
      !allowScroll ||
      (currentImage > 0 && currentImage < IMAGE_LOGS.length - 1)
    ) {
      event.preventDefault();
      const direction = Math.sign(event.deltaY);
      accumulatedScroll.current += event.deltaY;

      if (Math.abs(accumulatedScroll.current) > 70) {
        let newIndex = currentImage + direction;

        if (newIndex >= IMAGE_LOGS.length) {
          setAllowScroll(true);
          newIndex = IMAGE_LOGS.length - 1;
          accumulatedScroll.current = 0;
        } else if (newIndex < 0) {
          newIndex = 0;
          accumulatedScroll.current = 0;
        } else {
          updateDisplayedImage(newIndex);
          accumulatedScroll.current = 0;
          setAllowScroll(false);
        }
      }
    } else {
      setAllowScroll(true);
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", handleFakeScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleFakeScroll);
    };
  }, [currentImage, allowScroll]);

  useEffect(() => {
    const handleResetScroll = () => {
      if (window.pageYOffset === 0 && currentImage === 0) {
        setAllowScroll(false);
        accumulatedScroll.current = 0;
      }
    };

    window.addEventListener("scroll", handleResetScroll);
    return () => window.removeEventListener("scroll", handleResetScroll);
  }, [currentImage]);

  return {
    currentImage,
    setCurrentImage,
  };
};

export default useLog;
