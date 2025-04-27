import { FunctionComponent, JSX, useContext } from "react";
import ScreenTimeline from "./ScreenTimeline";
import { HeaderSwitchProps } from "../types/common.types";
import Screen from "./Screen";
import { ModalContext } from "@/app/providers";

const HeaderSwitch: FunctionComponent<HeaderSwitchProps> = ({
  dict,
  changeLanguage,
  setMessage,
  setVideoLoading,
  videoLoading,
  currentVideo,
  message,
  changeVideo,
  handleShop,
  messageLoading,
  handleSendMessage,
  chosenLanguage,
  setChosenLanguage,
}): JSX.Element => {
  const context = useContext(ModalContext);
  switch (context?.timeline) {
    case true:
      return (
        <ScreenTimeline
          dict={dict}
          changeLanguage={changeLanguage}
          setMessage={setMessage}
          setVideoLoading={setVideoLoading}
          videoLoading={videoLoading}
          currentVideo={currentVideo}
          message={message}
          messageLoading={messageLoading}
          handleSendMessage={handleSendMessage}
          changeVideo={changeVideo}
          handleShop={handleShop}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
        />
      );

    default:
      return (
        <Screen
          currentVideo={currentVideo}
          changeVideo={changeVideo}
          changeLanguage={changeLanguage}
          dict={dict}
          handleShop={handleShop}
          setVideoLoading={setVideoLoading}
          videoLoading={videoLoading}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
        />
      );
  }
};

export default HeaderSwitch;
