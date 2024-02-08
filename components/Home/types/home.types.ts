import { Creation } from "@/components/Distro/types/distro.types";
import { NextRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { AnyAction } from "redux";

export type GalleryProps = {
  more: boolean;
  currentIndex: number;
  dispatch: Dispatch<AnyAction>;
  galleryLoading: boolean;
  gallery: Creation[];
};

export interface Library {
  name: string;
  image: string;
  number: string;
  id: string;
  link: string;
  width: number;
  height: number;
}

export type LibraryProps = {
  dispatch: Dispatch<AnyAction>;
  currentBook: {
    link: string;
    image: string;
  };
  setCurrentBook: (e: { link: string; image: string }) => void;
  lastBook: MutableRefObject<HTMLDivElement | null>;
  handleLastBook: () => void;
};

export type ShelfProps = {
  dispatch: Dispatch<AnyAction>;
  currentBook: {
    link: string;
    image: string;
  };
  setCurrentBook: (e: { link: string; image: string }) => void;
  lastBook: MutableRefObject<HTMLDivElement | null>;
  handleLastBook: () => void;
};

export type HomeProps = {
  queryWindowSize300: boolean;
  queryWindowSize400: boolean;
  router: NextRouter;
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
};

export type DisplayProps = {
  currentIndex: number;
  setCurrentIndex: (e: SetStateAction<number>) => void;
  shop: MutableRefObject<HTMLDivElement | null>;
  setMore: (e: boolean) => void;
  more: boolean;
  router: NextRouter;
  dispatch: Dispatch<AnyAction>;
  galleryLoading: boolean;
  gallery: Creation[];
};

export type PortalsProps = {
  router: NextRouter;
};

export type FeatureProps = {
  title: string;
  image: string;
  router: NextRouter;
  link: string;
};
