import { Post, Profile } from "@/lib/generated";
import { TFunction } from "i18next";
import { NextRouter } from "next/router";
import { ChangeEvent, MutableRefObject, SetStateAction } from "react";
import { AnyAction, Dispatch } from "redux";

export type BlenderProps = {
  blenderPage: number;
  setBlenderPage: (e: SetStateAction<number>) => void;
  t: TFunction<"distro", undefined>;
};

export type LoadTileProps = {
  index: number;
};

export type DistroProps = {
  rewind: MutableRefObject<HTMLDivElement | null>;
  changeColor: () => void;
  heartColor: string;
  router: NextRouter;
};

export interface Quest {
  publication: Post;
  gate: Gate;
  questMetadata: {
    title: string;
    description: string;
    cover: string;
    videoCovers: {
      title: string;
      description: string;
      cover: string;
    }[];
  };
  status: boolean;
  pubId: string;
  profileId: string;
  milestones: Milestone[];
  questId: string;
  transactionHash: string;
  uri: string;
  milestoneCount: string;
  players: Player[];
  maxPlayerCount: string;
  blockTimestamp: string;
}

export interface Reward {
  amount: string;
  tokenAddress: string;
  rewardMetadata: {
    mediaCover: string;
    images: string;
    video: string;
    mediaType: string;
    audio: string;
    title: string;
    description: string;
  };
  uri: string;
  type: string;
}

export interface Milestone {
  gated: Gate;
  milestoneMetadata: {
    title: string;
    description: string;
    cover: string;
  };
  milestoneId: string;
  rewards: Reward[];
  rewardsLength: string;
  videoLength: string;
}

export interface Player {
  milestonesCompleted: {
    questId: string;
    milestonesCompleted: String;
  }[];
  eligibile: {
    milestone: string;
    questId: string;
    status: boolean;
  }[];
  profileId: string;
  questsCompleted: string[];
  questsJoined: string[];
  profile: Profile;
}

export interface Gate {
  erc721Logic: Creation[];
  erc20Logic: {
    address: string;
    amount: string;
  }[];
  oneOf: boolean;
}

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
  profile: Profile;
  publication:
    | (Post & {
        decrypted: any;
      })
    | undefined;
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

export interface Publication {
  post?: Creation | Quest | Award;
  type: string;
  publishedOn?: string;
  id: number;
}

export interface Award {
  amount: string;
  tokenAddress: string;
  rewardMetadata: {
    mediaCover: string;
    images: string;
    video: string;
    mediaType: string;
    audio: string;
    title: string;
    description: string;
    prompt: string;
  };
  uri: string;
  type: string;
  questId: string;
  pubId: string;
  profileId: string;
  milestone: string;
  questURI: string;
  questMetadata: {
    title: string;
    description: string;
    cover: string;
    videoCovers: {
      title: string;
      description: string;
      cover: string;
    }[];
  };
}

export type TileSwitchProps = {
  type: string;
  publication: Publication;
  index: number;
  dispatch: Dispatch<AnyAction>;
  filterConstants: FilterValues;
};

export type AwardProps = {
  publication: Award;
  dispatch: Dispatch<AnyAction>;
};

export type InteractBarProps = {
  publication: Post;
  col?: boolean;
};

export type WaveFormProps = {
  keyValue: string;
  audio: string;
  video: string;
  type: string;
  upload?: boolean;
  handleMedia?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handlePlayVideo?: () => void;
  handlePauseVideo?: () => void;
  handleSeekVideo?: (e: number) => void;
  videoInfo?: {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
  };
};

export type MediaProps = {
  type: string;
  srcUrl: string;
  srcCover?: string;
  classNameVideo?: React.CSSProperties;
  classNameImage?: string;
  classNameAudio?: string;
  objectFit?: string;
  hidden?: boolean;
};

export type ChromadinProps = {
  dispatch: Dispatch<AnyAction>;
  publication: Creation;
};

export type ListenerProps = {
  publication: Creation;
  dispatch: Dispatch<AnyAction>;
};

export enum ItemType {
  CoinOp = "coinop",
  Chromadin = "chromadin",
  Legend = "legend",
  Listener = "listener",
  F3M = "f3m",
  Other = "other",
  Kinora = "kinora",
  TheDial = "dial",
}

export type CoinOpProps = {
  publication: Creation;
  dispatch: Dispatch<AnyAction>;
  filterConstants: FilterValues;
};

export type PrintTypeProps = {
  printType: string;
};

export enum PrintType {
  Sticker = "0",
  Poster = "1",
  Shirt = "2",
  Hoodie = "3",
  Sleeve = "4",
  Crop = "5",
  NFTOnly = "6",
  Custom = "7",
  Other = "8",
}

export interface FilterValues {
  styles: string[][];
}

export type QuestProps = {
  publication: Quest;
};

export type TilesProps = {
  dispatch: Dispatch<AnyAction>;
  searchLoading: boolean;
  searchItems: Publication[];
  filterConstants: FilterValues;
};
