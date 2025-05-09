import { Account, Post } from "@lens-protocol/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RefObject } from "react";

export interface Creation {
  amount: string;
  uri: string;
  postId: string;
  printType: string;
  price: string;
  acceptedTokens: string[];
  designer: string;
  tokenIdsMinted: string;
  fulfiller: string;
  drop: {
    dropId: string;
    metadata: {
      cover: string;
      title: string
    }
    uri: string
  }
  collectionId: string;
  unlimited: boolean;
  origin: string;
  profile: Account;
  publication: Post | undefined;
  blockTimestamp: string;
  metadata: {
    access: string[];
    visibility: string;
    colors: string[];
    sizes: string[];
    mediaCover: string;
    description: string;
    communities: string[];
    title: string;
    tags: string[];
    prompt: string;
    mediaTypes: string[];
    profileHandle: string;
    microbrandCover: string;
    microbrand: string;
    images: string[];
    video: string;
    audio: string;
    onChromadin: string;
    sex: string;
    style: string;
  };
}

export type GalleryProps = {
  more: boolean;
  dict: any;
  currentIndex: number;
  galleryLoading: boolean;
  gallery: Creation[];
};

export type DisplayProps = {
  dict: any;
  shop: RefObject<HTMLDivElement | null>;
};

export type FeatureProps = {
  title: string;
  image: string;
  router: AppRouterInstance;
  link: string;
};
