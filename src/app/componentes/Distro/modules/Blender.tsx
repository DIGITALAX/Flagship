import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { BLENDER_IMAGES, INFURA_GATEWAY_INTERNAL } from "../../../lib/constants";
import { BlenderProps } from "../types/distro.types";

const Blender: FunctionComponent<BlenderProps> = ({
  blenderPage,
  setBlenderPage,
  dict,
}): JSX.Element => {
  return (
    <div className="w-full h-fit sm:h-[60rem] flex flex-col border-y-4 border-r-8 border-l-4 border-mainText rounded-xl relative bg-grayMid pt-3">
      <div className="relative border-b-4 w-full h-fit font-libB text-offBlack px-3 border-offBlack flex items-center justify-start pb-3">
        {dict?.distro?.research}
      </div>
      <div className="relative w-full h-full flex flex-col sm:flex-row justify-start items-start font-lib">
        <div className="flex flex-col w-full sm:w-60 h-full relative text-offBlack items-start justify-start">
          <div className="relative w-full h-fit flex items-center justify-center text-2xl font-libB border-offBlack border-b-2 p-4">
            {dict?.distro?.type}
          </div>
          <div className="relative w-fit h-fit flex flex-col items-start justify-start p-4 gap-6">
            <div className="relative flex flex-row w-fit h-fit items-center justify-center gap-2">
              <div
                className={`relative w-fit h-fit flex items-center justify-center`}
              >
                <Image
                  height={20}
                  width={20}
                  src={`${INFURA_GATEWAY_INTERNAL}QmW5crWDqbtPECQDief39xyMKZCCTBRV3YbTwpLmepC1aR`}
                  priority
                  draggable={false}
                />
              </div>
              <div className="relative flex items-center justify-center w-fit h-fit text-lg">
                Blender
              </div>
            </div>
            <div className="relative flex flex-col gap-2 w-fit h-fit justify-start">
              {[
                dict?.distro?.plugin,
                dict?.distro?.synth,
                dict?.distro?.segmentation,
                dict?.distro?.open,
                dict?.distro?.zero,
                dict?.distro?.packing,
                dict?.distro?.["3d"],
                dict?.distro?.restitch,
                dict?.distro?.rematerialize,
                dict?.distro?.mint,
              ].map((item, index) => {
                return (
                  <div
                    className="relative flex flex-row gap-2 w-fit h-fit break-word text-xs"
                    key={index}
                  >
                    <div
                      className={`relative flex items-center justify-center w-5 h-5`}
                    >
                      <Image
                        layout="fill"
                        src={`${INFURA_GATEWAY_INTERNAL}QmPKWsvnkYgpuyNuPw7DtBKKBkbJtuG7YLi7U56BqSazwy`}
                        priority
                        draggable={false}
                      />
                    </div>
                    <div className="relative flex items-center justify-center w-fit h-fit">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative w-1 h-full bg-offBlack flex items-center justify-center"></div>
        <div className="relative w-full h-full flex flex-col relative items-center justify-start gap-3 p-1 sm:p-4">
          <div className="relative w-full h-fit flex flex-row items-center justify-between gap-2 sm:gap-6">
            {(blenderPage == 0
              ? BLENDER_IMAGES.slice(0, 3)
              : BLENDER_IMAGES.slice(3, 6)
            ).map((image: string, index: number) => {
              return (
                <div
                  key={index}
                  className={`h-fit w-full midi:w-fit flex items-center justify-center relative`}
                >
                  <div
                    className={`rounded-lg w-full midi:w-60 h-24 sm:h-40 midi:h-60 border-2 border-offBlack relative flex bg-offBlack`}
                  >
                    <Image
                      src={`${INFURA_GATEWAY_INTERNAL}${image}`}
                      layout="fill"
                      priority
                      className="rounded-lg"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative flex flex-col preG:flex-row w-full h-fit justify-between items-center gap-3 font-lib">
            <div className="relative w-full sm:w-fit h-fit flex items-center justify-center gap-3 flex-row text-xs text-offBlack">
              <div className="relative w-full sm:w-fit h-fit p-2 border-2 border-offBlack rounded-lg flex items-center justify-center bg-offWhite">
                (1,0,0)
              </div>
              <div className="relative w-full sm:w-fit h-fit p-2 border-2 border-offBlack rounded-lg flex items-center justify-center bg-offWhite">
                (3,2,2)
              </div>
            </div>
            <div className="relative w-full sm:w-fit h-fit flex items-center justify-center gap-3 flex-row text-offBlack text-xs">
              <div
                className={`relative flex items-center justify-center w-full sm:w-fit h-fit px-3 py-2 rounded-lg bg-offWhite border-2 border-offBlack ${
                  blenderPage !== 0
                    ? "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                    : "opacity-50"
                }`}
                onClick={() => blenderPage !== 0 && setBlenderPage(0)}
              >
                {dict?.distro?.prev}
              </div>
              <div
                className={`relative flex items-center justify-center w-full sm:w-fit h-fit px-3 py-2 bg-offWhite border-2 border-offBlack rounded-lg ${
                  blenderPage !== 1
                    ? "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                    : "opacity-50"
                }`}
                onClick={() => blenderPage !== 1 && setBlenderPage(1)}
              >
                {dict?.distro?.next}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full relative items-center justify-center">
            <div className="relative flex items-center justify-center w-full h-full px-3 midi:px-8 pt-8 pb-1">
              <div className={`relative bg-offBlack w-full h-[30rem]`}>
                <Image
                  src={`${INFURA_GATEWAY_INTERNAL}Qmb1qasXpS7hthiXxNnmctgYqAP4kzxFWYMt7RQBtAmgMc`}
                  layout="fill"
                  priority
                  draggable={false}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative w-fit h-full pt-1 px-8 pb-8 flex items-center justify-center font-lib text-offBlack text-xs">
              {dict?.distro?.info}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blender;
