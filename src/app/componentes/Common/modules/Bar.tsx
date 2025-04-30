import {
  idiomaAImagen,
  Idiomas,
  indiceAIdioma,
  INFURA_GATEWAY_INTERNAL
} from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import Heart from "./Heart";
import { BarProps } from "../types/common.types";
import Marquee from "react-fast-marquee";

const Bar: FunctionComponent<BarProps> = ({
  dict,
  currentVideo,
  changeVideo,
  setChosenLanguage,
  chosenLanguage,
  handleShop,
  changeLanguage,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <>
      <div className="relative w-full h-fit flex mr-0 flex-row gap-4 items-end justify-end">
        <div className="relative w-fit h-fit flex items-center justify-center flex flex-row gap-3">
          <div className="relative w-fit h-fit flex items-center justify-center text-mainText flex-col text-center font-pot uppercase">
            <div className="text-base flex items-center justify-center">
              {dict?.common?.select}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
              <div
                className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-sewingHS"
                onClick={() =>
                  setChosenLanguage((prev) =>
                    prev > 0 ? prev - 1 : Object.keys(idiomaAImagen).length - 1
                  )
                }
              >
                <PiArrowFatLinesLeftFill size={20} />
              </div>
              <div className="relative w-fit h-fit flex items-center justify-center">
                {indiceAIdioma[chosenLanguage]}
              </div>
              <div
                className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-sewingHS"
                onClick={() =>
                  setChosenLanguage((prev) =>
                    prev < Object.keys(idiomaAImagen).length - 1 ? prev + 1 : 0
                  )
                }
              >
                <PiArrowFatLinesRightFill size={20} />
              </div>
            </div>
            <div
              onClick={() => {
                if (chosenLanguage === 0 || chosenLanguage === 1) {
                  changeLanguage(indiceAIdioma[chosenLanguage]);
                }
              }}
              className={`text-xxs flex items-center justify-center px-2 border border-mainText rounded-sm h-6 w-full ${
                (chosenLanguage === 0 || chosenLanguage === 1) &&
                "cursor-sewingHS active:scale-95"
              }`}
            >
              ~*{" "}
              {chosenLanguage !== 0 && chosenLanguage !== 1
                ? dict?.common?.soon
                : dict?.common?.ve}{" "}
              *~
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center">
            <div className="relative w-8 h-10 flex items-center justify-center">
              <Image
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}${
                  idiomaAImagen[indiceAIdioma[chosenLanguage] as Idiomas]
                }`}
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <Heart
            changeColor={() => {
              context?.setScreen(undefined);
              context?.changeColor();
              changeVideo(
                Number(currentVideo) < 10 || Number(currentVideo) == 19
                  ? 10
                  : Number(currentVideo) + 1
              );
            }}
            heartColor={context?.heartColor!}
          />
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-end gap-3 flex-row">
        <div className="relative w-fit h-fit flex flex-col sm:flex-row items-center justify-center gap-2">
          <div
            className={`relative w-fit h-fit flex items-center justify-center hover:-rotate-12 cursor-sewingHS`}
            onClick={() => {
              context?.setScreen(undefined);
              changeVideo(6);
              context?.setFullScreenVideo({
                open: context?.fullScreenVideo?.open ? false : true,
                time: context?.fullScreenVideo?.time,
                duration: context?.fullScreenVideo?.duration,
                isPlaying: context?.fullScreenVideo?.isPlaying,
                volume: context?.fullScreenVideo?.volume,
                volumeOpen: context?.fullScreenVideo?.volumeOpen,
                allVideos: context?.fullScreenVideo?.allVideos,
                cursor: context?.fullScreenVideo?.cursor,
                index: context?.fullScreenVideo?.index,
              });
            }}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}QmYVHgyAQLxcoP5o23n3jXNnA9N9C93WqpM2heAegty7hU`}
              height={20}
              width={60}
              priority
              draggable={false}
            />
          </div>
          <div className="relative w-fit h-fit items-center justify-center text-mainText flex whitespace-nowrap font-firaL">
            {dict?.common?.bend}
          </div>
        </div>
        <div className="relative w-96 h-9 rounded-r-md text-sm overflow-x-hidden whitespace-nowrap flex items-center justify-center text-offBlack">
          <div className="absolute w-full h-full top-0 left-0 z-0 flex items-center justify-center border-y border-r border-mainText bg-white rounded-r-md">
            <Marquee
              className="z-0"
              direction="right"
              speed={25}
              gradient={false}
            >
              {" "}
              {`${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉 ${dict?.common?.shop} ❤️ 👉`}{" "}
            </Marquee>
          </div>
          <div
            className="relative w-full h-full cursor-sewingHS bg-gradient-to-r from-mainBg via-transparent flex items-center justify-center rounded-r-md to-transparent"
            onClick={() => {
              handleShop();
              context?.setScreen(undefined);
              changeVideo(8);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Bar;
