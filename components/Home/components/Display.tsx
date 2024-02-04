import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { INFURA_GATEWAY } from "../../../lib/constants";
import Gallery from "./Gallery";
import { DisplayProps } from "../types/home.types";
import Portals from "./Portals";

const Display: FunctionComponent<DisplayProps> = ({
  shop,
  queryWindowSize2XL,
  queryWindowInbetween,
  router,
  currentIndex,
  setCurrentIndex,
  setMore,
  more,
  dispatch,
}): JSX.Element => {
  return (
    <div className="relative w-full flex flex-col justify-start items-center h-fit bg-offBlack gap-10">
      <div className="relative flex w-full min-w-full h-fit min-h-fit">
        <div className="grid grid-flow-rows auto-row-auto w-full min-w-full p-4">
          <div className="relative h-fit w-full row-start-1">
            <div
              className="grid relative grid-flow-col auto-cols-auto content-between justify-between w-full h-fit pt-2 pb-2"
              ref={shop}
              id="shop"
            >
              <div className="col-start-1 w-fit h-fit relative text-white font-rain text-7xl pl-3">
                X
              </div>
              <div className="col-start-2 w-fit h-fit relative place-self-center">
                <div className="border border-offBlack rounded-full border-l border-r pl-1 pr-1 w-36 h-12 relative bg-skyBlue">
                  <div className="border-r-2 border-l-2 border-offBlack rounded-full w-full h-full whitespace-nowrap relative bg-midWhite grid grid-col-flow auto-cols-auto">
                    <div
                      className={`col-start-1 relative w-fit h-fit place-self-center pt-1.5 ${
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
                    <div className="col-start-2 relative w-1.5 h-full bg-grayMid place-self-center"></div>
                    <div
                      className={`col-start-3 relative w-fit h-fit place-self-center pt-1.5 ${
                        currentIndex !== 5
                          ? "active:scale-105 hover:opacity-90 cursor-sewingHS"
                          : "opacity-60"
                      } `}
                      onClick={() =>
                        currentIndex < 5 && setCurrentIndex(currentIndex + 1)
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
            </div>
          </div>
          <div className="relative h-full w-full row-start-2 flex pt-10">
            <Gallery
              more={more}
              queryWindowSize2XL={queryWindowSize2XL}
              queryWindowInbetween={queryWindowInbetween}
              dispatch={dispatch}
            />
          </div>
          <div className="relative w-full h-fit pt-10 pb-2 flex justify-center cursor-sewingHS hover:opacity-70 active:opacity-70">
            <div
              className="relative grid grid-flow-col auto-cols-auto w-fit h-fit"
              onClick={() => {
                setMore(!more);
                router.replace(
                  router.asPath,
                  router.asPath.includes(`more`)
                    ? router.asPath.replaceAll(
                        `?more=${more}`,
                        `?more=${!more}`
                      )
                    : router.asPath.includes(`shop`)
                    ? router.asPath + `?more=${!more}`
                    : router.asPath.replaceAll(
                        router.asPath,
                        `/#shop?more=${!more}`
                      ),
                  {
                    shallow: true,
                    scroll: false,
                  }
                );
              }}
            >
              <div className={`col-start-1 relative w-fit h-fit pr-2`}>
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/QmbDMPggX1dz6VC4c8hNNT4td62ArBaCiDCG2mewNqFZN2`}
                  height={10}
                  width={20}
                  priority
                  draggable={false}
                />
              </div>
              <div className="col-start-2 relative w-fit h-fit font-firaL text-offWhite">
                {!more ? "more?" : "less?"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto justify-center px-2 galaxy:px-4 md:px-8 py-16 gap-6">
        <div
          id="world"
          className="text-center font-mag break-word pt-3 w-fit h-fit relative place-self-center text-2xl sm:text-5xl"
        >
          Our worlds are run by interfaces,
          <br /> machine code, and APIs.
        </div>
        <div className="relative h-fit text-skyBlue font-fut w-fit text-left text-xs place-self-center text-sm min-w-fit sm:text-base 2xl:text-xl break-word">
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
