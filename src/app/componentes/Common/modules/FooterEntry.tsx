"use client";

import Image from "next/legacy/image";
import { FunctionComponent, JSX, ReactElement, useContext } from "react";
import { INFURA_GATEWAY_INTERNAL } from "../../../lib/constants";
import { BsQuestionCircle } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { FooterProps } from "../types/common.types";
import { ModalContext } from "@/app/providers";
import MarqueeText from "react-fast-marquee";

const FooterEntry: FunctionComponent<FooterProps> = ({ dict }): JSX.Element => {
  const context = useContext(ModalContext);
  return (
    <div className="relative w-full flex flex-col">
      <div className="relative w-full bg-offBlack h-fit flex items-center justify-start flex-col gap-10 pt-12">
        <div className="relative w-full h-fit flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          <div
            className={`relative flex border-2 border-offWhite bg-offWhite w-full md:w-fit p-2 h-fit lg:h-full items-center justify-center`}
          >
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY_INTERNAL}QmSvQQsELrcEaGrQ2L2Lak8F2hgMeiBxw7MwhCrog6snDj`}
              priority
              draggable={false}
            />
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div
                id="digi"
                className="relative flex w-fit text-center h-fit text-offWhite font-mag text-[8.5vw] p-4"
              >
                DIGITALAX
              </div>
              <div
                id="code"
                className="font-fut w-full h-fit text-[1.4vw] lg:text-[1vw] relative flex items-center justify-center pb-2"
              >
                100 105 103 105 116 97 108 97 120
              </div>
              <div className="relative w-full px-8 h-10 flex items-center justify-center flex-col lg:pb-0 pb-6">
                <div className="w-full h-full border-x-2 border-b-2 border-white flex items-center justify-center relative"></div>
                <div className="w-full h-full border-x-2 border-white flex items-center justify-center relative"></div>
              </div>
            </div>
          </div>

          <div className="relative w-fit h-fit flex flex-col items-start justify-start gap-2">
            <div
              className="relative w-full h-fit flex items-end justify-end cursor-sewingHS"
              onClick={() => window.open("https://status.digitalax.xyz/")}
            >
              <div className="relative h-3.5 w-3.5 flex items-center justify-center rounded-full opacity-75 animate-ping bg-green-500"></div>
              <div className="absolute right-px flex items-center justify-center rounded-full h-3 w-3 bg-green-300"></div>
            </div>
            <div className="flex relative h-fit w-full md:w-72 lg:w-[20vw] text-xs md:text-[1vw] xl:text-[0.8vw] text-midWhite justify-center items-center font-lib break-all text-center md:text-left sm:text-right leading-8 whitespace-inline">
              {dict?.footer?.maps}
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-fit items-center justify-center gap-2 flex-col">
          <div
            id="foot1"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
          <div
            id="foot2"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
          <div
            id="foot3"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
          <div className="relative w-fit break-words h-fit flex items-center justify-center text-xs text-offWhite font-lib text-center sm:px-0 px-2">
            {dict?.footer?.heart}
          </div>
        </div>

        <div className="relative flex items-center justify-between w-full h-fit text-midWhite gap-8 md:gap-4 flex-col md:flex-row">
          <div className="relative w-fit h-fit ml-0 flex items-center justify-center flex-col gap-1 md:order-1 order-3">
            <div className="relative w-fit h-fit flex items-center justify-center hover:text-skyBlue cursor-sewingHS hover:rotate-3">
              {dict?.footer?.line}
            </div>
            <div
              className={`relative w-36 h-4 flex items-center justify-center`}
            >
              <Image
                src={`${INFURA_GATEWAY_INTERNAL}QmXbwk3dg9GKWhjVTQGsrt6dKARFCyqNz71ssUo2SGx1zc`}
                draggable={false}
                layout="fill"
                priority
              />
            </div>
          </div>
          <div
            className="relative w-fit h-fit flex flex-row items-center justify-center gap-2 cursor-sewingHS active:scale-95 md:order-2 order-2"
            onClick={() => context?.handleRewind()}
          >
            <div className="flex items-center justify-center w-fit h-fit">
              <BiArrowToTop color="#F7F8E8" size={20} />
            </div>
            <div className="w-fit flex items-center justify-center h-fit font-lib text-base text-offWhite">
              {dict?.footer?.rewind}
            </div>
          </div>
          <div className="relative w-fit h-fit flex-row gap-3 flex items-end justify-end md:pr-2 md:order-3 order-1 mr-0">
            {[
              {
                image: "QmWVdyGgXbPL5SiRnQwALHvWzAnyiXBos1oB4TVTqg7saV",
                link: "https://fountain.ink/u/digiink",
                title: "Ink",
              },
              {
                image: "QmP5349vcKLNXUhtLyZWQXB8vEbFwRcKLzzB93vxkLsvpw",
                link: "https://github.com/digitalax",
                title: "Github",
              },
              {
                image: "QmeA7R3J8FrhZuMmiFFrVqNmWzKkJCbP51pajFrYdEGBVX",
                link: "https://cypher.digitalax.xyz/autograph/digitalax",
                title: "Autograph",
              },
              {
                link: "https://cc0web3fashion.com/forum/",
                title: "Web3 Fashion Forum",
                component: <BsQuestionCircle size={30} color={"#FFDCFF"} />,
              },
            ].map(
              (
                item: {
                  image?: string;
                  title: string;
                  link: string;
                  component?: ReactElement;
                },
                index: number
              ) => {
                return (
                  <div
                    key={index}
                    className="relative w-5 h-5 flex items-center justify-center cursor-sewingHS active:scale-95"
                    onClick={() => window.open(item.link)}
                    title={item.title}
                  >
                    {item?.component ? (
                      item.component
                    ) : (
                      <Image
                        src={`${INFURA_GATEWAY_INTERNAL}${item.image}`}
                        layout="fill"
                        draggable={false}
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="relative items-center bg-offBlack text-offWhite justify-center font-lib text-center text-xs gap-3 w-full pb-2 pt-6 px-2 flex flex-col">
        <div className="relative w-fit h-fit flex">{dict?.footer?.comms}</div>
        <div className="relative w-fit h-fit flex">{dict?.footer?.foro}</div>
      </div>
      <div className="relative w-full h-full bg-black flex overflow-x-hidden py-2">
        <MarqueeText
          gradient={false}
          speed={20}
          direction={"left"}
          pauseOnHover
          className="z-0"
        >
          <div className="relative w-full h-fit text-white text-xs font-lib uppercase flex flex-row gap-10 items-center">{` Lens: 0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd Eth: 0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A Polygon: 0x6968105460f67c3bf751be7c15f92f5286fd0ce5 Lens: 0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd Eth: 0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A Polygon: 0x6968105460f67c3bf751be7c15f92f5286fd0ce5 Lens: 0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd Eth: 0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A Polygon: 0x6968105460f67c3bf751be7c15f92f5286fd0ce5 Lens: 0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd Eth: 0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A Polygon: 0x6968105460f67c3bf751be7c15f92f5286fd0ce5 `}</div>
        </MarqueeText>
      </div>
    </div>
  );
};

export default FooterEntry;
