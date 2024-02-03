import { NextRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import tokens from "../../../pages/api/tokens.json";
import { Gallery } from "../types/home.types";

const useGallery = (router: NextRouter) => {
  const shop = useRef<null | HTMLDivElement>(null);
  const [blur, setBlur] = useState<boolean>(true);
  const [images, setImages] = useState<Gallery[]>(
    tokens.slice(0, 18)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageBoundaryBackward, setPageBoundaryBackward] = useState<boolean>();
  const [pageBoundaryForward, setPageBoundaryForward] = useState<boolean>();

  const fetchImages = (): void => {
    setPageBoundaryBackward(false);
    const res: Gallery[] = tokens;
    setImages(res);
  };

  const totalImages: number = tokens.length;
  const indexofLastImage: number = currentPage * 18;
  const indexofFirstImage: number = indexofLastImage - 18;
  const [more, setMore] = useState<boolean>(false);
  const currentImages: Gallery[] = images.slice(
    indexofFirstImage,
    indexofLastImage
  );
  const pageNumbers: number[] = [];
  const totalPages: number = Math.ceil(totalImages / 18);
  for (let i: number = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginateBackward = (pageNumber: number): void => {
    if (pageNumber > pageNumbers[0]) {
      router.replace(
        router.asPath,
        router.asPath.includes(`more`)
          ? router.asPath.replaceAll(
              router.asPath,
              `/#shop?pageNumber=${pageNumber - 1}?more=${more}`
            )
          : `/#shop?pageNumber=${pageNumber - 1}`,
        {
          shallow: true,
          scroll: false,
        }
      );
    }
  };

  const paginateForward = (pageNumber: number): void => {
    if (pageNumber < totalPages) {
      router.replace(
        router.asPath,
        router.asPath.includes(`more`)
          ? router.asPath.replaceAll(
              router.asPath,
              `/#shop?pageNumber=${pageNumber + 1}?more=${more}`
            )
          : `/#shop?pageNumber=${pageNumber + 1}`,
        {
          shallow: true,
          scroll: false,
        }
      );
    }
  };

  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (router.asPath.includes("more=true")) {
      setMore(true);
    } else {
      setMore(false);
    }
    if (router.asPath.includes("pageNumber")) {
      const pageNumber: number = Number(
        router.asPath.split("=", 2).pop()?.split("?", 1)
      );
      setCurrentPage(pageNumber);

      if (pageNumber < totalPages && pageNumber > pageNumbers[0]) {
        setPageBoundaryBackward(true);
        setPageBoundaryForward(true);
      } else if (pageNumber === totalPages) {
        setPageBoundaryForward(false);
        setPageBoundaryBackward(true);
      } else if (pageNumber === pageNumbers[0]) {
        setPageBoundaryForward(true);
        setPageBoundaryBackward(false);
      }
    } else {
      setPageBoundaryForward(true);
      setPageBoundaryBackward(false);
    }
  }, [router.asPath]);

  return {
    currentImages,
    currentPage,
    paginateBackward,
    paginateForward,
    pageBoundaryBackward,
    pageBoundaryForward,
    setMore,
    more,
    blur,
    setBlur,
    handleShop,
    shop
  };
};

export default useGallery;
