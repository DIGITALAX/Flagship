import { NextRouter } from "next/router";
import {
  Comment,
  Mirror,
  Post,
  Profile,
  Quote,
} from "./../../../lib/generated";
import { Dispatch, MutableRefObject } from "react";
import { AnyAction } from "redux";

export interface Gallery {
  image: string;
  width: number;
  height: number;
  external: string;
}

export type GalleryProps = {
  currentImages: Gallery[];
  more: boolean;
  queryWindowSize2XL: boolean;
  queryWindowInbetween: boolean;
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
  setRefactorModal: (e: { open: boolean; transparency: boolean }) => void;
  showImage: string;
  setShowImage: (e: string) => void;
  link: string;
  setLink: (e: string) => void;
  lastBook: MutableRefObject<HTMLDivElement | null>
  handleLastBook: () => void;
};

export type ShelfProps = {
  setRefactorModal: (e: { open: boolean; transparency: boolean }) => void;
  showImage: string;
  setShowImage: (e: string) => void;
  link: string;
  setLink: (e: string) => void;
  lastBook: MutableRefObject<HTMLDivElement | null>;
  handleLastBook: () => void;
};

export type DisplayProps = {
  shop: MutableRefObject<HTMLDivElement | null>;
  queryWindowSize2XL: boolean;
  queryWindowInbetween: boolean;
  currentImages: Gallery[];
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean | undefined;
  pageBoundaryBackward: boolean | undefined;
  setMore: (e: boolean) => void;
  more: boolean;
  blur: boolean;
  setBlur: (e: boolean) => void;
  router: NextRouter;
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

export interface ApprovalArgs {
  to: string;
  from: string;
  data: string;
}
