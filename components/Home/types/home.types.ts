import { NextRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { AnyAction } from "redux";

export interface Gallery {
  image: string;
  width: number;
  height: number;
  external: string;
}

export type GalleryProps = {
  more: boolean;
  queryWindowSize2XL: boolean;
  queryWindowInbetween: boolean;
  dispatch: Dispatch<AnyAction>;
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
  queryWindowSize2XL: boolean;
  queryWindowSize300: boolean;
  queryWindowSize400: boolean;
  queryWindowInbetween: boolean;
  router: NextRouter;
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
};

export type DisplayProps = {
  currentIndex: number;
  setCurrentIndex: (e: SetStateAction<number>) => void;
  shop: MutableRefObject<HTMLDivElement | null>;
  queryWindowSize2XL: boolean;
  queryWindowInbetween: boolean;
  setMore: (e: boolean) => void;
  more: boolean;
  router: NextRouter;
  dispatch: Dispatch<AnyAction>;
};

export type PortalsProps = {
  router: NextRouter;
};
