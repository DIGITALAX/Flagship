import Image from "next/image";
import { FunctionComponent } from "react";
import { GridProps } from "../../../types/general.types";
import Feed from "./Feed";

const Grid: FunctionComponent<GridProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
  reactionsFeed,
  reactionLoaded,
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-fit relative grid md:grid-flow-row md:auto-rows-auto grid-flow-col auto-cols-auto py-4">
      <div className="row-start-1 col-start-1 relative w-full h-full border-offBlack border-t-8 border-x-4 border-b-4 text-foot text-[4.6vw] lg:text-[5.6vw] xl:text-[4.6vw] font-thun">
        <Image layout="fill" objectFit="cover" src={"/images/tele.png"} />
        <div className="relative grid grid-flow-col w-full h-full pb-56 md:pr-6 pr-2 lg:pr-10 xl:pr-40">
          <div className="relative col-start-1 w-fit h-fit pl-4 md:pl-10 pt-10 leading-normal">
            NEW SOCIAL <br /> INTEGRATIONS <br /> FOR <br />
            REALMS <br />
            INTERFACES
          </div>
        </div>
      </div>
      <div
        id="static"
        className="row-start-2 md:row-start-1 col-start-1 md:col-start-2 relative w-full h-16 md:w-16 md:h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4"
      ></div>
      <div className="row-start-3 md:row-start-1 col-start-1 md:col-start-3 relative w-full h-[60vw] max-w-full md:h-full border-offBlack md:border-8 md:border-l-4 md:border-b-4">
        <Image
          objectFit="cover"
          layout="fill"
          className="w-full h-full relative flex"
          objectPosition={"top"}
          src="/images/gridmain.png"
        />
      </div>
      <div className="row-start-4 md:row-start-2 col-start-1 relative w-full wide:w-[20vw] min-w-fit pb-12 lg:pb-0 h-full border-offBlack border-l-8 border-t-8 border-r-8 md:border-r-4 border-b-0 text-darkG bg-grayL font-aud text-[4vw] sm:text-[2.5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-tight px-6 pt-6 break-word">
        THE FIRST PROFILES ARE LIVE ON LENS, WITH NEW PROTOCOL INTEGRATONS
        RELEASED AT A STEADY CLIP. <span className="text-lensG">WHY LENS?</span>{" "}
        DECENTRALIZED SOCIAL CONNECTS YOU WITH COLLECTORS AND CREATORS WITHOUT
        ALL THE EXTRA ANGST OVER WHY THE ALGORITHM DECIDED YOU’RE SHADOWBANNED
        –––––––– BECAUSE, WHY SHOULD ANYONE CARE WHAT ELON, JACK, ZUCK AND OTHER
        4-LETTER CELEBRITIES THINK ABOUT WHAT WE HAVE TO SAY, WHEN WE HAVE WEB3?
      </div>
      <div className="row-start-5 md:row-start-2 col-start-1 md:col-start-2 relative w-full h-full border-offBlack border-t-4 border-x-4 border-b-0 min-h-fit grid-flow-row grid auto-rows-auto">
        <div
          id="static2"
          className="relative row-start-1 w-full md:w-16 h-16 md:h-full bg-offBlack saturate-0 border-offBlack border-4"
        ></div>
        <div className="relative md:absolute row-start-2 w-full min-h-fit h-fit p-2 border-t-8 border-offBlack self-end place-self-end m-0 bg-midWhite border-x-4 border-b-0">
          <div className="relative w-full h-fit grid grid-flow-row auto-rows-auto">
            <div className="relative w-fit h-fit hover:rotate-12 row-start-1 place-self-center cursor-sewingHS">
              <Image
                width={40}
                height={50}
                src={"/images/inarilogo.png"}
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-6 md:row-start-2 col-start-1 md:col-start-3 relative w-full h-fit lg:h-full bg-offWhite border-offBlack border-t-8 galaxy:border-l-4 border-b-0">
        <Feed
          publicationsFeed={publicationsFeed}
          getMoreFeed={getMoreFeed}
          queryWindowSize={queryWindowSize}
          queryWindowSizeMobile={queryWindowSizeMobile}
          queryWindowSizeXL={queryWindowSizeXL}
          reactionsFeed={reactionsFeed}
          reactionLoaded={reactionLoaded}
        />
      </div>
    </div>
  );
};

export default Grid;
