import { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import { Post } from "@lens-protocol/client";
import { RefObject, SetStateAction } from "react";

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
  changeLanguage: (lang: string) => void;
  setMessage: (e: SetStateAction<string>) => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
  currentVideo: number | undefined;
  message: string;
  messageLoading: boolean;
  handleSendMessage: () => Promise<void>;
  changeVideo: (index: number) => void;
  handleShop: () => void;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
};

export type HeaderSwitchProps = {
  dict: any;
  changeLanguage: (lang: string) => void;
  setMessage: (e: SetStateAction<string>) => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
  currentVideo: number | undefined;
  message: string;
  messageLoading: boolean;
  handleSendMessage: () => Promise<void>;
  changeVideo: (index: number) => void;
  handleShop: () => void;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
};

export type BarProps = {
  dict: any;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
  currentVideo: number | undefined;
  changeVideo: (index: number) => void;
  changeLanguage: (lang: string) => void;
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
  changeLanguage: (lang: string) => void;
  changeVideo: (index: number) => void;
  handleShop: () => void;
  setVideoLoading: (e: SetStateAction<boolean>) => void;
  videoLoading: boolean;
  setChosenLanguage: (e: SetStateAction<number>) => void;
  chosenLanguage: number;
};

export type InfoProps = {
  setInfoOpen: (e: SetStateAction<boolean>) => void;
  dict: any;
  position: {
    x: number;
    y: number;
  };
};
