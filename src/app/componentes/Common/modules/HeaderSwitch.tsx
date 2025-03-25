import { FunctionComponent, JSX, useContext } from "react";
import ScreenTimeline from "./ScreenTimeline";
import { HeaderSwitchProps } from "../types/common.types";
import Screen from "./Screen";
import { ModalContext } from "@/app/providers";

const HeaderSwitch: FunctionComponent<HeaderSwitchProps> = ({
  dict,
  chosenLanguage,
  setChosenLanguage,
  setMessage,
  setVideoLoading,
  videoLoading,
  currentVideo,
  message,
  changeVideo,
  handleShop,
  messageLoading,
  handleSendMessage,
}): JSX.Element => {
  const context = useContext(ModalContext);
  switch (context?.timeline) {
    case true:
      return (
        <ScreenTimeline
          dict={dict}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
          setMessage={setMessage}
          setVideoLoading={setVideoLoading}
          videoLoading={videoLoading}
          currentVideo={currentVideo}
          message={message}
          messageLoading={messageLoading}
          handleSendMessage={handleSendMessage}
          changeVideo={changeVideo}
          handleShop={handleShop}
        />
      );

    default:
      return (
        <Screen
          currentVideo={currentVideo}
          changeVideo={changeVideo}
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
          dict={dict}
          handleShop={handleShop}
          setVideoLoading={setVideoLoading}
          videoLoading={videoLoading}
        />
      );
  }
};

export default HeaderSwitch;
