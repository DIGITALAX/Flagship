import { FunctionComponent, JSX, useContext } from "react";
import Bar from "./Bar";
import { ScreenProps } from "../types/common.types";
import Image from "next/legacy/image";
import { BG_SCREENS, INFURA_GATEWAY } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import Video from "./Video";
import useScreen from "../hooks/useScreen";

const Screen: FunctionComponent<ScreenProps> = ({
  dict,
  currentVideo,
  setChosenLanguage,
  chosenLanguage,
  changeVideo,
  handleShop,
  videoLoading,
  setVideoLoading,
}): JSX.Element => {
  const context = useContext(ModalContext);
  const { countdown,  setPause, pause } = useScreen();
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
                src={`${INFURA_GATEWAY}/ipfs/QmfDDXoCxm3YZFHX1aAStSfbzqEQJPXyPBRqgU39dgqr8G`}
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
          currentVideo={currentVideo}
          changeVideo={changeVideo}
          setChosenLanguage={setChosenLanguage}
          chosenLanguage={chosenLanguage}
          handleShop={handleShop}
        />
        <div
          className={`"relative w-full h-[60vh] half:h-full flex items-center justify-between rounded-sm overflow-hidden border-4 border-mainText`}
        >
          {context?.screen ? (
            <div className="relative w-full h-full flex justify-between items-start flex-col py-6 px-3 gap-5">
              <div className="absolute top-0 left-0 flex w-full h-full">
                <Image
                  draggable={false}
                  objectFit="cover"
                  layout="fill"
                  src={`${INFURA_GATEWAY}/ipfs/${
                    BG_SCREENS[context?.screen?.index]
                  }`}
                />
              </div>
              <div className="relative w-full h-fit flex flex-col items-start justify-start gap-2">
                <div className="relative w-full h-fit flex flex-row justify-between items-center gap-5 font-dos">
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
                className="relative font-nerd w-full h-full overflow-y-scroll flex text-left"
                id="noScroll"
              >
                {dict?.common?.[`${context?.screen?.title?.slice(0, -1)}P`]}
              </div>
              <div className="relative w-full h-fit flex flex-row items-center justify-between gap-2 font-dos text-lg uppercase">
                <div className="relative w-fit h-fit flex">
                  <div className="relative w-20 h-8 flex">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      draggable={false}
                      src={`${INFURA_GATEWAY}/ipfs/QmcVNg25dNCCniDEitMZDosbwc1MwKzF3dwjU45X7jLqHW`}
                    />
                  </div>
                </div>
                <div className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center">
                  <div className="relative w-fit h-fit flex items-center justify-center">
                    <div className="relative w-10 h-10 flex">
                      <Image
                        objectFit="contain"
                        layout="fill"
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/QmNzHcQTDDWMmZXvdP9xfYFACnZK3zw9uZ9Nw8LwEoq8Fh`}
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
                    <div className="relative w-10 h-10 flex">
                      <Image
                        objectFit="contain"
                        layout="fill"
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/QmWvsRFTsnNfDCTD7MWm7aMuTYx61yLNGufpxqSoHpsnWi`}
                      />
                    </div>
                  </div>
                  <div
                    className="relative w-fit h-fit flex cursor-sewingHS items-center justify-center"
                    onClick={() => setPause(!pause)}
                  >
                    <div className={`relative flex w-10 h-9`}>
                      <Image
                        key={
                          pause
                            ? "QmWJvh3VR59sDtWkjgnfsd1gKcfrnU8RJhBYjbeQGoYGiM"
                            : "QmeDt8Kxgj1DC69wNxoyS3RBMWGMVxJvq5e3yyv1doCrmu"
                        }
                        objectFit="contain"
                        layout="fill"
                        draggable={false}
                        src={`${INFURA_GATEWAY}/ipfs/${
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
          ) : (
            <Video
              setVideoLoading={setVideoLoading}
              videoLoading={videoLoading}
              currentVideo={currentVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen;
