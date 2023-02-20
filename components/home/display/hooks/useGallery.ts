import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, useGalleryResult } from "../../../../types/general.types";
import tokens from "./../../../../pages/api/tokens.json";

const useGallery = (): useGalleryResult => {
  const router = useRouter();
  const imagesPerPage: number = 18;
  const [images, setImages] = useState<Gallery[]>(
    tokens.slice(0, imagesPerPage)
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
  const indexofLastImage: number = currentPage * imagesPerPage;
  const indexofFirstImage: number = indexofLastImage - imagesPerPage;
  const [more, setMore] = useState<boolean>(false);
  const currentImages: Gallery[] = images.slice(
    indexofFirstImage,
    indexofLastImage
  );
  const pageNumbers: number[] = [];
  const totalPages: number = Math.ceil(totalImages / imagesPerPage);
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
  };
};

export default useGallery;
