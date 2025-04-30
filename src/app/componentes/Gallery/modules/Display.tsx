import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import Gallery from "./Gallery";
import Portals from "./Portals";
import useGallery from "../hooks/useGallery";
import { DisplayProps } from "../types/gallery.types";

const Display: FunctionComponent<DisplayProps> = ({
  dict,
  shop,
}): JSX.Element => {
  const {
    currentIndex,
    setCurrentIndex,
    setMore,
    more,
    galleryLoading,
    gallery,
  } = useGallery();

  return (
    <div className="relative w-full flex flex-col justify-start items-center h-fit bg-offBlack gap-12">
      <div
        className="relative w-full h-fit flex flex-row justify-between items-center gap-4 p-4"
        ref={shop}
        id="shop"
      >
        <div className="flex items-center justify-center ml-0 w-fit h-fit relative text-white font-rain text-7xl">
          X
        </div>
        <div className="flex items-center justify-center mr-0 relative flex-row border border-offBlack rounded-full border-x px-1 w-36 h-12 bg-skyBlue">
          <div className="border-x-2 rounded-full w-full h-full whitespace-nowrap border-offBlack relative flex flex-row bg-midWhite items-center justify-center">
            <div
              className={`flex items-center justify-center relative w-full h-fit ${
                currentIndex !== 0
                  ? "active:scale-105 hover:opacity-90 cursor-sewingHS"
                  : "opacity-60"
              } `}
              onClick={() =>
                currentIndex > 0 && setCurrentIndex(currentIndex - 1)
              }
            >
              <Image
                src={`${INFURA_GATEWAY_INTERNAL}QmV8P1Hx2mAx6TQeE6S9nvCuByK8p5wYKmX38a6WaDcfD6`}
                height={30}
                width={30}
                priority
                draggable={false}
              />
            </div>
            <div className="flex items-center justify-center relative w-1.5 h-full bg-grayMid"></div>
            <div
              className={`flex items-center justify-center relative w-full h-fit ${
                currentIndex !== 4
                  ? "active:scale-105 hover:opacity-90 cursor-sewingHS"
                  : "opacity-60"
              } `}
              onClick={() =>
                currentIndex < 4 && setCurrentIndex(currentIndex + 1)
              }
            >
              <Image
                src={`${INFURA_GATEWAY_INTERNAL}QmfLgTmhWRefCb6jHFP1Em1hKQWzxq2QDXcXrT1cqZMZx9`}
                height={30}
                width={30}
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-start flex-col gap-3 px-4 pt-4">
        <Gallery
          more={more}
          dict={dict}
          currentIndex={currentIndex}
          galleryLoading={galleryLoading}
          gallery={gallery}
        />
        <div className="relative w-full h-fit items-center flex justify-center">
          <div
            className="relative flex items-center justify-center w-fit h-fit gap-2 cursor-sewingHS hover:opacity-70"
            onClick={() => setMore(!more)}
          >
            <div
              className={`flex items-center justify-center relative w-fit h-fit`}
            >
              <Image
                src={`${INFURA_GATEWAY_INTERNAL}QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
                height={10}
                width={20}
                priority
                draggable={false}
              />
            </div>
            <div className="flex items-center justify-center relative w-fit h-fit font-firaL text-offWhite">
              {!more ? dict?.common?.more : dict?.common?.less}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-col gap-6">
        <div
          id="world"
          className="text-center font-mag break-word pt-3 w-fit h-fit relative flex items-center justify-center text-2xl sm:text-5xl px-3"
        >
          {dict?.common?.world}
        </div>
        <div className="relative h-fit text-skyBlue font-fut w-3/4 text-left text-xs flex items-center justify-center text-sm sm:text-base 2xl:text-xl break-word">
          {dict?.common?.cyper}
        </div>
      </div>
      <Portals dict={dict} />
    </div>
  );
};

export default Display;
