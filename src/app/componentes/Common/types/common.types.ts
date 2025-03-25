import { Post } from "@lens-protocol/client";
import { SetStateAction } from "react";

export type FooterProps = {
  dict: any;
};

export enum ItemType {
  CoinOp = "coinop",
  Chromadin = "chromadin",
  Listener = "listener",
  F3M = "f3m",
  Other = "other",
  Kinora = "kinora",
  TheDial = "dial",
}

export type HeartProps = {
  changeColor?: () => void;
  heartColor: string;
};

export type HeaderProps = {
  handleShop: () => void;
  dict: any;
};

export interface FullScreenVideo {
  open: boolean;
  time?: number;
  duration?: number;
  isPlaying?: boolean;
  volume?: number;
  volumeOpen?: boolean;
  allVideos: Post[];
  cursor?: string | undefined;
  index: number;
}

export type ScreenTimelineProps = {
  dict: any;
  chosenLanguage: number;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  setMessage: (e: SetStateAction<string>) => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
  currentVideo: number | undefined;
  message: string;
  messageLoading: boolean;
  handleSendMessage: () => Promise<void>;
  changeVideo: (index: number) => void;
  handleShop: () => void;
};

export type HeaderSwitchProps = {
  dict: any;
  chosenLanguage: number;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  setMessage: (e: SetStateAction<string>) => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
  currentVideo: number | undefined;
  message: string;
  messageLoading: boolean;
  handleSendMessage: () => Promise<void>;
  changeVideo: (index: number) => void;
  handleShop: () => void;
};

export type BarProps = {
  dict: any;
  currentVideo: number | undefined;
  changeVideo: (index: number) => void;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
  handleShop: () => void;
};

export type VideoProps = {
  currentVideo: number | undefined;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
};

export type ScreenProps = {
  dict: any;
  currentVideo: number | undefined;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
  changeVideo: (index: number) => void;
  handleShop: () => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
};
