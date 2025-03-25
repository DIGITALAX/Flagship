import { Account, Post } from "@lens-protocol/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RefObject } from "react";

export interface Creation {
  amount: string;
  pubId: string;
  uri: string;
  profileId: string;
  printType: string;
  prices: string[];
  acceptedTokens: string[];
  owner: string;
  soldTokens: string;
  fulfillerPercent: string;
  fulfillerBase: string;
  fulfiller: string;
  designerPercent: string;
  dropId: string;
  dropCollectionIds: string[];
  collectionId: string;
  unlimited: boolean;
  origin: string;
  profile: Account;
  publication: Post | undefined;
  blockTimestamp: string;
  dropMetadata: {
    dropTitle: string;
    dropCover: string;
  };
  collectionMetadata: {
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
