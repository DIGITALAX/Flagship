import Image from "next/image";
import { FunctionComponent } from "react";
import { GridSmallProps } from "../../../types/general.types";
import Feed from "./Feed";

const GridSmall: FunctionComponent<GridSmallProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
  reactionsFeed
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-fit relative grid grid-flow-row auto-rows-auto pb-4 pt-4">
      <div className="row-start-1 col-start-1 relative w-full sm:w-full h-fit border-offBlack border-8 border-r-4 border-b-4 text-foot text-[7.5vw] sm:text-[9.6vw] pb-36 font-thun">
        <Image layout="fill" objectFit="cover" src={"/images/tele.png"} />
        <div className="relative grid grid-flow-col w-[60vw] h-full pb-10 pr-2">
          <div className="relative col-start-1 w-fit h-fit pl-4 md:pl-10 pt-10 leading-normal">
            NEW SOCIAL INTEGRATIONS FOR REALMS INTERFACES
          </div>
        </div>
      </div>
      <div
        id="static"
        className="row-start-2 col-start-1 relative w-full h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4"
      ></div>
      <div className="row-start-3 col-start-1 relative w-full h-[50vw] border-offBlack md:border-8 md:border-l-4 md:border-b-4">
        <Image
          objectFit="cover"
          layout="fill"
          objectPosition={"top"}
          className="w-full h-full"
          src="/images/gridmain.png"
        />
      </div>
      <div className="row-start-4 col-start-1 relative w-full pb-12 pt-12 h-full border-offBlack border-8 border-r-4 border-b-4 text-darkG bg-grayL font-aud text-[4.5vw] leading-normal p-10">
        THE FIRST PROFILES ARE LIVE ON LENS, <br /> WITH NEW PROTOCOL
        INTEGRATONS
        <br />
        RELEASED AT A STEADY CLIP. <span className="text-lensG">
          WHY LENS?
        </span>{" "}
        <br />
        DECENTRALIZED SOCIAL CONNECTS YOU <br /> WITH COLLECTORS AND CREATORS{" "}
        <br /> WITHOUT ALL THE EXTRA ANGST OVER
        <br /> WHY THE ALGORITHM DECIDED YOU’RE
        <br /> SHADOWBANNED –––––––– BECAUSE,
        <br /> WHY SHOULD ANYONE CARE WHAT ELON,
        <br /> JACK, ZUCK AND OTHER 4-LETTER
        <br /> CELEBRITIES THINK ABOUT WHAT WE
        <br /> HAVE TO SAY, WHEN WE HAVE WEB3?
      </div>
      <div className="row-start-5 col-start-1 relative w-full h-14 border-offBlack border-2">
        <div className="grid-flow-col grid auto-cols-auto relative w-full h-full">
          <div
            id="static2"
            className="relative col-start-1 w-full h-full bg-offBlack saturate-0"
          ></div>
          <div className="absolute col-start-2 w-16 h-full p-2 border-offBlack self-end place-self-end m-0 bg-midWhite border-r-2 border-4 border-t-0 border-b-0">
            <div className="relative w-full h-full grid grid-flow-row auto-rows-auto">
              <div className="relative w-fit h-full hover:rotate-12 row-start-1 place-self-center cursor-sewingHS">
                <Image
                  width={30}
                  height={40}
                  src={"/images/inarilogo.png"}
                  className="justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-6 col-start-1 relative w-full h-fit bg-offWhite border-offBlack">
        <div className="relative w-full h-full grid grid-flow-row auto-rows-auto content-center overflow-x-none">
          <Feed
            publicationsFeed={publicationsFeed}
            getMoreFeed={getMoreFeed}
            queryWindowSize={queryWindowSize}
            queryWindowSizeMobile={queryWindowSizeMobile}
            queryWindowSizeXL={queryWindowSizeXL}
            reactionsFeed={reactionsFeed}
          />
        </div>
      </div>
    </div>
  );
};

export default GridSmall;