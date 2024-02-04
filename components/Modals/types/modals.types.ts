import { FullScreenVideoState } from "@/redux/reducers/fullScreenVideoSlice";
import { ChangeEvent, Dispatch, MouseEvent, RefObject } from "react";
import Draggable from "react-draggable";
import { AnyAction } from "redux";

export type ImageLargeProps = {
  mainImage: string;
  dispatch: Dispatch<AnyAction>;
  type: string;
};

export type RefactorElementProps = {
  dispatch: Dispatch<AnyAction>;
  transparency: boolean;
};

export type FullScreenVideoProps = {
  dispatch: Dispatch<AnyAction>;
  fullScreenVideo: FullScreenVideoState;
  videoRef: RefObject<HTMLVideoElement>;
  handlePlayPause: () => Promise<void>;
  handleSeek: (e: MouseEvent<HTMLDivElement>) => void;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNextVideo: (forward: boolean) => Promise<void>;
  loading: {
    play: boolean;
    next: boolean;
    videos: boolean;
  };
  wrapperRef: RefObject<Draggable>;
};
