import { FullScreenVideoState } from "@/redux/reducers/fullScreenVideoSlice";
import { TFunction, i18n } from "i18next";
import { NextRouter } from "next/router";
import { MutableRefObject, SetStateAction } from "react";
import { AnyAction, Dispatch } from "redux";

export type FooterProps = {
  handleRewind: () => void;
};

export type HeaderProps = {
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
  handleShop: () => void;
  fullScreenVideo: FullScreenVideoState;
  dispatch: Dispatch<AnyAction>;
  currentVideo: number | undefined;
  changeVideo: (index: number) => void;
  setVideoLoading: (e: boolean) => void;
  videoLoading: boolean;
  address: `0x${string}` | undefined;
  openConnectModal: (() => void) | undefined;
  handleSendMessage: () => Promise<void>;
  messageLoading: boolean;
  setMessage: (e: string) => void;
  message: string;
  t: TFunction<"common", undefined>;
  i18n: i18n;
  chosenLanguage: string;
  setChosenLanguage: (e: SetStateAction<string>) => void;
};

export type HeartProps = {
  changeColor?: () => void;
  heartColor: string;
};
