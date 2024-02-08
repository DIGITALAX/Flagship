import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/constants";
import Gallery from "./Gallery";
import { DisplayProps } from "../types/home.types";
import Portals from "./Portals";

const Display: FunctionComponent<DisplayProps> = ({
  shop,
  router,
  currentIndex,
  setCurrentIndex,
  setMore,
  more,
  dispatch,
  galleryLoading,
  gallery,
}): JSX.Element => {
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
                src={`${INFURA_GATEWAY}/ipfs/QmV8P1Hx2mAx6TQeE6S9nvCuByK8p5wYKmX38a6WaDcfD6`}
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
                src={`${INFURA_GATEWAY}/ipfs/QmfLgTmhWRefCb6jHFP1Em1hKQWzxq2QDXcXrT1cqZMZx9`}
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
          currentIndex={currentIndex}
          dispatch={dispatch}
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
                src={`${INFURA_GATEWAY}/ipfs/QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
                height={10}
                width={20}
                priority
                draggable={false}
              />
            </div>
            <div className="flex items-center justify-center relative w-fit h-fit font-firaL text-offWhite">
              {!more ? "more?" : "less?"}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-col gap-6">
        <div
          id="world"
          className="text-center font-mag break-word pt-3 w-fit h-fit relative flex items-center justify-center text-2xl sm:text-5xl"
        >
          Our worlds are run by interfaces,
          <br /> machine code, and APIs.
        </div>
        <div className="relative h-fit text-skyBlue font-fut w-3/4 text-left text-xs flex items-center justify-center text-sm sm:text-base 2xl:text-xl break-word">
          Here cypherpunks write prompts, design across multiple dimensions by
          hand, and build the end to end decentralize-it-yourself network
          economy.
          <br />
          <br />
          We create fashion, co•operate complex machinery, and collect NFTs as
          conductors for what move people to action in every reality –– virtual,
          latent, or IRL. We are drawn as if by a dreaming machine to works that
          have something to say through their stunning appearance, the novel
          status they carry, and innate keys to social mobility in code.
        </div>
      </div>
      <Portals router={router} />
    </div>
  );
};

export default Display;
