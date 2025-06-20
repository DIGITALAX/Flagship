import { FunctionComponent, JSX, useContext } from "react";
import Bar from "./Bar";
import { ScreenProps } from "../types/common.types";
import Image from "next/legacy/image";
import {
  BG_SCREENS,
  INFURA_GATEWAY_INTERNAL,
  screenTranslate,
} from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import Video from "./Video";
import useScreen from "../hooks/useScreen";
import Info from "./Info";
import { DndContext } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

const Screen: FunctionComponent<ScreenProps> = ({
  dict,
  currentVideo,
  changeLanguage,
  changeVideo,
  handleShop,
  videoLoading,
  setVideoLoading,
  chosenLanguage,
  setChosenLanguage,
}): JSX.Element => {
  const context = useContext(ModalContext);
  const {
    countdown,
    setPause,
    pause,
    infoOpen,
    setInfoOpen,
    position,
    setPosition,
    sensors,
  } = useScreen();
  return (
    <div id="header" className="half:gap-0 gap-3">
      <div className="relative w-fit h-full flex items-start justify-start half:order-1 order-2 text-mainText font-nerd">
        <div className="relative w-full half:h-full half:w-80 h-fit sm:h-52 flex flex-col gap-2 items-start justify-between">
          <div className="relative w-fit h-fit flex">
            {dict?.common?.agents}
          </div>
          <div className="relative text-xs flex half:flex-nowrap flex-wrap half:flex-col gap-3 items-start justify-start h-fit w-full">
            {[
              {
                title: dict?.common?.discoverT,
                description: dict?.common?.discoverD,
              },
              {
                title: dict?.common?.designT,
                description: dict?.common?.designD,
              },
              {
                title: dict?.common?.distroT,
                description: dict?.common?.distroD,
              },
              {
                title: dict?.common?.collectT,
                description: dict?.common?.collectD,
              },
              {
                title: dict?.common?.creativeT,
                description: dict?.common?.creativeD,
              },
              {
                title: dict?.common?.fulfillT,
                description: dict?.common?.fulfillD,
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex w-fit h-fit flex gap-2 flex-row items-center justify-between cursor-sewingHS"
                  onClick={() =>
                    context?.setScreen({
                      title: item.title,
                      description: item.description,
                      index,
                    })
                  }
                >
                  <div className="relative w-fit h-fit py-1 px-1.5 flex items-center justify-center border border-mainText">
                    {item.title}
                  </div>
                  <div className="relative h-fit flex w-fit">
                    - {item.description}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative w-full justify-between h-fit half:h-full flex flex-row gap-5">
            <div className="relative w-full h-20 half:h-full flex bg-[#FEE62F]">
              <Image
                draggable={false}
                objectFit="cover"
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmfDDXoCxm3YZFHX1aAStSfbzqEQJPXyPBRqgU39dgqr8G`}
              />
            </div>
            <div className="relative w-fit h-20 half:h-full flex items-end justify-end">
              <div className="relative w-8 h-full flex bg-[#FEE62F]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-start flex-col gap-3 half:order-2 order-1">
        <Bar
          dict={dict}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
          currentVideo={currentVideo}
          changeVideo={changeVideo}
          changeLanguage={changeLanguage}
          handleShop={handleShop}
        />
        <DndContext
          onDragEnd={(event) => {
            if (event.delta) {
              setPosition((prev) => ({
                x: prev.x + event.delta.x,
                y: prev.y + event.delta.y,
              }));
            }
          }}
          modifiers={[restrictToParentElement, restrictToWindowEdges]}
          sensors={sensors}
        >
          <div
            className={`"relative w-full h-[60vh] half:h-full flex items-center justify-between rounded-sm overflow-hidden border-4 border-mainText bg-mainText`}
          >
            {context?.screen ? (
              <>
                <div className="relative w-full h-full flex justify-between items-start flex-col py-6 px-3 gap-5">
                  <div className="absolute top-0 left-0 flex w-full h-full">
                    <Image
                      draggable={false}
                      objectFit="cover"
                      layout="fill"
                      src={`${INFURA_GATEWAY_INTERNAL}${
                        BG_SCREENS[context?.screen?.index]
                      }`}
                    />
                  </div>
                  <div className="relative w-full h-fit flex flex-col items-start justify-start gap-2 text-white">
                    <div className="relative w-full h-fit flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-5 font-dos">
                      <div className="relative w-fit h-fit text-3xl uppercase flex">
                        {context?.screen?.title}
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center gap-2">
                        <div className="relative w-fit h-fit text-sm flex">
                          {context?.screen?.description}
                        </div>
                        <div className="relative w-fit h-fit text-sm flex text-[#005EFF]">
                          v1.1
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full h-1 bg-mainText"></div>
                  </div>
                  <div
                    className="relative font-nerd w-full h-full overflow-y-scroll flex text-left text-white flex-col items-start gap-5 justify-between font-abd"
                    id="noScroll"
                  >
                    <div className="relative w-full h-fit flex items-start justify-start flex-col gap-2 text-left">
                      <div className="relative w-fit h-fit flex text-[#29C0E7] text-lg">
                        {dict?.common?.prompt}
                      </div>
                      <div
                        className="relative w-fit h-fit flex text-sm whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html:
                            dict?.common?.[
                              `${screenTranslate[context?.screen?.title]}P`
                            ],
                        }}
                      ></div>
                    </div>
                    <div className="relative w-full h-fit flex items-end justify-end flex-col gap-2 text-right">
                      <div className="relative w-fit h-fit flex text-[#F1DF38] text-lg">
                        {dict?.common?.mind}
                      </div>
                      <div
                        className="relative w-fit h-fit flex text-sm whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html:
                            dict?.common?.[
                              `${screenTranslate[context?.screen?.title]}R`
                            ],
                        }}
                      ></div>
                    </div>
                    <div className="relative w-full h-fit flex items-start justify-start flex-col gap-2 text-left">
                      <div className="relative w-fit h-fit flex text-[#FFAA52] text-lg">
                        {dict?.common?.pixel}
                      </div>
                      <div
                        className="relative w-fit h-fit flex text-sm whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html:
                            dict?.common?.[
                              `${screenTranslate[context?.screen?.title]}A`
                            ],
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative w-full h-fit flex flex-row items-center justify-between gap-2 font-dos text-sm sm:text-lg uppercase sm:flex-nowrap flex-wrap">
                    <div className="relative w-fit h-fit flex">
                      <div className="relative w-8 sm:w-20 h-8 flex">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          draggable={false}
                          src={`${INFURA_GATEWAY_INTERNAL}QmcVNg25dNCCniDEitMZDosbwc1MwKzF3dwjU45X7jLqHW`}
                        />
                      </div>
                    </div>
                    <div className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center sm:flex-nowrap flex-wrap">
                      <div
                        className="relative w-fit h-fit flex items-center justify-center cursor-sewingHS"
                        onClick={() => setInfoOpen(!infoOpen)}
                      >
                        <div className="relative w-7 h-7 sm:w-10 sm:h-10 flex">
                          <Image
                            objectFit="contain"
                            layout="fill"
                            draggable={false}
                            src={`${INFURA_GATEWAY_INTERNAL}QmNzHcQTDDWMmZXvdP9xfYFACnZK3zw9uZ9Nw8LwEoq8Fh`}
                          />
                        </div>
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        {dict?.common?.time}
                      </div>
                      <div className="relative w-fit h-fit flex text-[#F8FF00] items-center justify-center">
                        {countdown}
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="relative w-7 h-7 sm:w-10 sm:h-10 flex">
                          <Image
                            objectFit="contain"
                            layout="fill"
                            draggable={false}
                            src={`${INFURA_GATEWAY_INTERNAL}QmWvsRFTsnNfDCTD7MWm7aMuTYx61yLNGufpxqSoHpsnWi`}
                          />
                        </div>
                      </div>
                      <div
                        className="relative w-fit h-fit flex cursor-sewingHS items-center justify-center"
                        onClick={() => setPause(!pause)}
                      >
                        <div className={`relative flex w-7 h-6 sm:w-10 sm:h-9`}>
                          <Image
                            key={
                              pause
                                ? "QmWJvh3VR59sDtWkjgnfsd1gKcfrnU8RJhBYjbeQGoYGiM"
                                : "QmeDt8Kxgj1DC69wNxoyS3RBMWGMVxJvq5e3yyv1doCrmu"
                            }
                            objectFit="contain"
                            layout="fill"
                            draggable={false}
                            src={`${INFURA_GATEWAY_INTERNAL}${
                              pause
                                ? "QmWJvh3VR59sDtWkjgnfsd1gKcfrnU8RJhBYjbeQGoYGiM"
                                : "QmeDt8Kxgj1DC69wNxoyS3RBMWGMVxJvq5e3yyv1doCrmu"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {infoOpen &&
                  typeof window !== "undefined" &&
                  window.innerWidth > 700 && (
                    <Info
                      position={position}
                      dict={dict}
                      setInfoOpen={setInfoOpen}
                    />
                  )}
              </>
            ) : (
              <Video
                setVideoLoading={setVideoLoading}
                videoLoading={videoLoading}
                currentVideo={currentVideo}
              />
            )}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Screen;
