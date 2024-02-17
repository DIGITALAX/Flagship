import { FullScreenVideoState } from "@/redux/reducers/fullScreenVideoSlice";
import { NextRouter } from "next/router";
import { MutableRefObject } from "react";
import { AnyAction, Dispatch } from "redux";

export type FooterProps = {
  handleRewind: () => void;
};

export type HeaderProps = {
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
  handleShop: () => void;
  router: NextRouter;
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
};

export type HeartProps = {
  changeColor: () => void;
  heartColor: string;
};
