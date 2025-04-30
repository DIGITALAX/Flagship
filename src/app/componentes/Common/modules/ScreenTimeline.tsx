import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import { useModal } from "connectkit";
import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useAccount } from "wagmi";
import { ScreenTimelineProps } from "../types/common.types";
import Bar from "./Bar";
import Video from "./Video";
import { ModalContext } from "@/app/providers";

const ScreenTimeline: FunctionComponent<ScreenTimelineProps> = ({
  dict,
  changeLanguage,
  setMessage,
  setVideoLoading,
  videoLoading,
  currentVideo,
  message,
  messageLoading,
  handleSendMessage,
  changeVideo,
  handleShop,
  chosenLanguage,
  setChosenLanguage,
}): JSX.Element => {
  const { openSwitchNetworks, openOnboarding } = useModal();
  const { chainId, isConnected } = useAccount();
  const context = useContext(ModalContext);
  return (
    <div id="header" className="gap-4">
      <div className="relative w-full h-fit half:w-fit half:h-full flex items-start justify-start half:order-1 order-2">
        <div className="relative w-full half:h-full half:w-80 h-fit sm:h-52 flex items-stretch sm:items-center justify-center sm:justify-between flex-col sm:flex-row half:flex-col gap-3 font-bit p-4 bg-mainText">
          <div className="absolute w-full flex flex-row justify-between h-fit top-0 left-0">
            <div className="relative ml-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
            <div className="relative mr-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
          </div>
          <div className="absolute w-full flex flex-row justify-between h-fit bottom-0 left-0">
            <div className="relative ml-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
            <div className="relative mr-0 bg-mainBg flex items-center justify-center w-2 h-2"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full justify-start items-start half:flex hidden">
            <Image
              layout="fill"
              objectFit="fill"
              draggable={false}
              priority
              src={`${INFURA_GATEWAY_INTERNAL}QmVdLxvGcosPWi3DLREjbPWUwf7Q5AXroxxBg5CHD4q4qM`}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full justify-start items-start flex half:hidden">
            <Image
              layout="fill"
              objectFit="fill"
              priority
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}QmYWuUrkVNoSpz2NAr3V1hLqoucb48uTFsRthHR9trKY5V`}
            />
          </div>
          <div className="relative w-full sm:w-fit h-fit flex flex-col preG:flex-row half:flex-col gap-8 sm:gap-3 half:gap-6 items-center justify-center">
            <div className="relative w-full preG:w-fit h-full flex flex-col gap-3 items-center justify-center">
              <div
                className="relative w-fit h-fit flex items-center justify-center text-xl half:text-3xl text-center"
                id="npc"
              >
                {dict?.common?.studio}
              </div>
              <div className="relative w-full preG:w-fit h-fit flex items-center justify-center flex-col gap-3">
                <div
                  className="relative w-full preG:w-fit h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    context?.setScreen(undefined);
                    changeVideo(0);
                  }}
                >
                  <div className="relative w-full preG:w-36 half:w-52 h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      priority
                      draggable={false}
                      src={`${INFURA_GATEWAY_INTERNAL}QmSpjYvvdRtRzyN6cjRL1SGbSKDu5mDAwZtqb1WPZcH7Q9`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-base half:text-lg"
                    id="play"
                  >
                    {dict?.common?.play}
                  </div>
                </div>
                <div
                  className="relative w-full preG:w-fit h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    setMessage(dict?.common?.encrypt);
                    context?.setScreen(undefined);
                    changeVideo(5);
                  }}
                >
                  <div className="relative w-full preG:w-36 half:w-52 h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      draggable={false}
                      priority
                      src={`${INFURA_GATEWAY_INTERNAL}QmSpjYvvdRtRzyN6cjRL1SGbSKDu5mDAwZtqb1WPZcH7Q9`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-base half:text-lg"
                    id="play"
                  >
                    {dict?.common?.chat}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex items-center justify-center">
              <div className="absolute w-full h-full flex items-center justify-center">
                <Image
                  layout="fill"
                  draggable={false}
                  priority
                  src={`${INFURA_GATEWAY_INTERNAL}QmSfBUFGogXohAgLYimvy1ArU4aUrLyYCZ7EDuFELudWm7`}
                />
              </div>
              <div className="relative p-2 flex items-start justify-center w-full sm:w-52 h-44 sm:h-48 min-h-fit text-orilla text-sm text-left">
                {currentVideo === 5 ? (
                  <>
                    <textarea
                      className={`relative w-full h-full font-bit flex items-center justify-center bg-black ${
                        message === dict?.common?.sent
                          ? "text-white"
                          : "text-orilla"
                      }`}
                      style={{ resize: "none" }}
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    ></textarea>
                    <div
                      className={`absolute bottom-2 right-2 flex items-center justify-center w-12 rounded-sm text-super border border-orilla h-5 ${
                        !messageLoading && "cursor-sewingHS active:scale-95"
                      }`}
                      onClick={() =>
                        isConnected
                          ? !messageLoading && handleSendMessage()
                          : chainId !== 232
                          ? openSwitchNetworks?.()
                          : openOnboarding?.()
                      }
                    >
                      <div
                        className={`relative w-fit h-fit flex items-center justify-center ${
                          messageLoading ? "animate-spin" : "top-px"
                        }`}
                      >
                        {messageLoading ? (
                          <AiOutlineLoading color="#46B171" size={10} />
                        ) : (
                          dict?.common?.send
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-start">
                    {dict?.common?.welcome}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-fit h-fit flex flex-col preG:flex-row half:flex-col gap-8 sm:gap-3 items-center justify-center mr-0">
            <div className="relative w-full sm:w-fit flex flex-col gap-2 items-center justify-center h-fit">
              <div className="relative flex items-center justify-center flex-row sm:flex-col half:flex-row w-full sm:w-32 half:w-52  h-fit gap-2 half:gap-3">
                <div
                  className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    context?.setScreen(undefined);
                    changeVideo(1);
                  }}
                >
                  <div className="relative w-full h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      draggable={false}
                      priority
                      src={`${INFURA_GATEWAY_INTERNAL}QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                    id="equip"
                  >
                    {dict?.common?.equip}
                  </div>
                </div>
                <div
                  className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    context?.setScreen(undefined);
                    changeVideo(4);
                  }}
                >
                  <div className="relative w-full h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      priority
                      draggable={false}
                      src={`${INFURA_GATEWAY_INTERNAL}QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                    id="equip"
                  >
                    {dict?.common?.train}
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center flex-row sm:flex-col half:flex-row w-full sm:w-32 half:w-52 h-fit gap-2 half:gap-3">
                <div
                  className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    context?.setScreen(undefined);
                    changeVideo(3);
                  }}
                >
                  <div className="relative w-full h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      priority
                      draggable={false}
                      src={`${INFURA_GATEWAY_INTERNAL}QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                    id="equip"
                  >
                    {dict?.common?.stats}
                  </div>
                </div>
                <div
                  className="relative w-full h-fit flex items-center justify-center cursor-sewingHS active:scale-95"
                  onClick={() => {
                    context?.setScreen(undefined);
                    changeVideo(2);
                  }}
                >
                  <div className="relative w-full h-10 flex items-center justify-center">
                    <Image
                      layout="fill"
                      draggable={false}
                      priority
                      src={`${INFURA_GATEWAY_INTERNAL}QmSzjxP1u5yReRefw3sTLW8G5QRBuHRztgRFyrn1YXuQTR`}
                    />
                  </div>
                  <div
                    className="absolute w-fit h-fit flex items-center justify-center text-sm half:text-lg"
                    id="equip"
                  >
                    {dict?.common?.market}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative w-full preG:w-fit h-fit items-center justify-center cursor-sewingHS active:scale-95 hidden half:flex"
              onClick={() => window.open(`https://npcstudio.xyz/`)}
            >
              <div className="relative w-full preG:w-36 half:w-52 h-10 flex items-center justify-center -hue-rotate-180">
                <Image
                  layout="fill"
                  priority
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}QmSpjYvvdRtRzyN6cjRL1SGbSKDu5mDAwZtqb1WPZcH7Q9`}
                />
              </div>
              <div
                className="absolute w-fit h-fit flex items-center justify-center text-base half:text-lg"
                id="des"
              >
                {dict?.common?.des}
              </div>
            </div>
            <div className="relative h-fit w-full preG:w-fit sm:h-full sm:w-20 half:w-fit half:h-fit flex items-center justify-center gap-3 flex-col rotate-0 half:rotate-0 sm:rotate-90">
              <div className="relative w-full preG:w-fit h-fit flex items-center justify-center">
                <div className="relative w-full preG:w-40 half:w-52 h-8 flex items-center justify-center">
                  <Image
                    layout="fill"
                    priority
                    src={`${INFURA_GATEWAY_INTERNAL}QmX8kDkP3rdgqeEauqzsbwL8zP4hGwtTKxrT3Xmw7R2feL`}
                    draggable={false}
                  />
                </div>
              </div>
              <div className="relative w-full preG:w-fit h-fit flex items-center justify-center">
                <div className="relative w-full preG:w-40 half:w-52 h-8 flex items-center justify-center">
                  <Image
                    layout="fill"
                    priority
                    src={`${INFURA_GATEWAY_INTERNAL}QmSkppQ8Z9M4cYR4NLDD8wMUVyB7j9cmoe6ABjQhnTWkfv`}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-start flex-col gap-3 half:order-2 order-1">
        <Bar
          dict={dict}
          currentVideo={currentVideo}
          changeVideo={changeVideo}
          changeLanguage={changeLanguage}
          handleShop={handleShop}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
        />
        <div className="relative w-full h-[60vh] half:h-full flex items-center justify-center bg-mainText rounded-sm overflow-hidden border-4 border-mainText">
          <Video
            setVideoLoading={setVideoLoading}
            videoLoading={videoLoading}
            currentVideo={currentVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default ScreenTimeline;
