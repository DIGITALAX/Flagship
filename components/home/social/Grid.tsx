import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { GridProps } from "../../../types/general.types";
import Feed from "./Feed";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Grid: FunctionComponent<GridProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
  dispatch,
  feedLoading,
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-full relative flex flex-col py-4">
      <div className="relative w-full h-[40rem] flex flex-col midi:flex-row items-start justify-start">
        <div className="relative flex w-full h-full border-offBlack text-foot text-[8vw] sm:text-[3.6vw] midi:text-[4.6vw] font-thun">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${INFURA_GATEWAY}/ipfs/QmSD1oBGb7wXrT4BJVxShL1DEWDAyXx4hwjLZg76Hq82vL`}
            draggable={false}
          />
          <div className="relative flex w-full h-fit midi:h-full">
            <div className="relative hidden midi:flex w-full midi:w-fit h-fit pl-2 pt-2 leading-normal break-words ml-0">
              NEW SOCIAL <br /> INTEGRATIONS <br /> FOR <br />
              REALMS <br />
              INTERFACES
            </div>
            <div className="relative midi:hidden flex w-full midi:w-fit h-fit px-3 pt-2 leading-normal break-words ml-0">
              NEW SOCIAL INTEGRATIONS FOR REALMS INTERFACES
            </div>
          </div>
        </div>
        <div className="relative w-full midi:w-fit h-fit midi:h-full flex items-start justify-start">
          <div
            id="static"
            className="relative flex w-full h-12 sm:h-16 midi:w-16 midi:h-full border-offBlack border-y-8 midi:border-y-0 midi:border-x-8"
          ></div>
        </div>
        <div className="relative w-full h-full flex items-start justify-start">
          <div className="relative flex w-full h-full max-w-full md:h-full">
            <Image
              objectFit="cover"
              layout="fill"
              className="w-full h-full relative flex"
              objectPosition={"top"}
              src={`${INFURA_GATEWAY}/ipfs/Qme8xXmkD3ktvzK2NeopaDQEHu5ALrsgZfHy9TchwULdgP`}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-2 bg-offBlack"></div>
      <div className="relative w-full h-[40rem] flex flex-col lg:flex-row">
        <div className="relative flex w-full h-full text-darkG bg-grayL font-aud text-[4vw] sm:text-[2.4vw] leading-tight pt-1 sm:pt-6">
          <div className="relative w-full h-fit p-4 break-words">
            THE FIRST PROFILES ARE LIVE ON LENS, WITH NEW PROTOCOL INTEGRATONS
            RELEASED AT A STEADY CLIP.{" "}
            <span className="text-lensG">WHY LENS?</span> DECENTRALIZED SOCIAL
            CONNECTS YOU WITH COLLECTORS AND CREATORS WITHOUT ALL THE EXTRA
            ANGST OVER WHY THE ALGORITHM DECIDED YOU’RE SHADOWBANNED ––––––––
            BECAUSE, WHY SHOULD ANYONE CARE WHAT ELON, JACK, ZUCK AND OTHER
            4-LETTER CELEBRITIES THINK ABOUT WHAT WE HAVE TO SAY, WHEN WE HAVE
            WEB3?
          </div>
        </div>
        <div className="relative w-full lg:w-fit h-full flex items-start justify-start">
          <div
            id="static2"
            className="relative flex w-full lg:w-16 h-12 sm:h-20 lg:h-full bg-offBlack saturate-0 border-offBlack border-y-8 lg:border-y-0 lg:border-x-8"
          ></div>
          <div className="absolute flex items-center justify-center w-fit lg:w-full h-full lg:h-fit p-1 lg:p-2 lg:border-b-0 border-b-8 border-t-8 border-offBlack self-end place-self-end lg:bottom-0  bg-midWhite border-x-4 border-b-0">
            <div className="relative w-6 h-8 hover:rotate-12 place-self-center cursor-sewingHS flex items-center justify-center">
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY}/ipfs/QmZ8bkkHce5sv1PjmhpYNPZDTyAQ5cskjFPvYg1KQ1YWKQ`}
                className="justify-center"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div
          className="relative flex w-full h-full lg:h-full bg-offWhite border-offBlack"
          id="scrollMicro"
        >
          <Feed
            publicationsFeed={publicationsFeed}
            getMoreFeed={getMoreFeed}
            queryWindowSize={queryWindowSize}
            queryWindowSizeMobile={queryWindowSizeMobile}
            queryWindowSizeXL={queryWindowSizeXL}
            dispatch={dispatch}
            feedLoading={feedLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
