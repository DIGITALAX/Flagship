import { NextRouter } from "next/router";
import {
  Comment,
  Erc20,
  FollowModule,
  Mirror,
  Post,
  Profile,
  Quote,
} from "./generated";
import { Dispatch, FormEvent, MouseEvent, Ref } from "react";
import { AnyAction } from "redux";
import ReactPlayer from "react-player";
import { MainVideoState } from "../redux/reducers/mainVideoSlice";
import { VideoSyncState } from "../redux/reducers/videoSyncSlice";
import { FollowerOnlyState } from "../redux/reducers/followerOnlySlice";
import { PostCollectValuesState } from "../redux/reducers/postCollectValuesSlice";

export interface Gallery {
  image: string;
  width: number;
  height: number;
  external: string;
}

export type useGalleryResult = {
  currentImages: Gallery[];
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean | undefined;
  pageBoundaryBackward: boolean | undefined;
  more: boolean;
  setMore: (e: boolean) => void;
  blur: boolean;
  setBlur: (e: boolean) => void;
};

export type GalleryProps = {
  currentImages: Gallery[];
  more: boolean;
  queryWindowSize2XL: boolean;
  queryWindowInbetween: boolean;
};

export interface Blender {
  image: string;
}

export type BoxProps = {
  currentImages: Blender[];
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
  items: string[];
};

export type useBoxResults = {
  currentImages: Blender[];
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
  items: string[];
};

export type DirectoryProps = {
  items: string[];
};

export type useGalleryBoxProps = {
  currentImages: Blender[];
};

export type usePaginateProps = {
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
};

export type FooterProps = {
  handleRewind: () => void;
};

export type HeaderProps = {
  rewind: any;
  handleShop: () => void;
  changeColor: () => void;
  heartColor: string;
  router: NextRouter;
};

export type useLibraryResult = {
  showImage: string;
  setShowImage: (e: string) => void;
  link: string;
  setLink: (e: string) => void;
  lastBook: any;
  handleLastBook: () => void;
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
  setRefactorModal: (e: {
    open: boolean;
    transparency: boolean;
  }) => void;
};

export type ShelfProps = {
  setRefactorModal: (e: {
    open: boolean;
    transparency: boolean;
  }) => void;
};

export type FeedProps = {
  publicationsFeed: (Post | Quote | Mirror)[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  dispatch: Dispatch<AnyAction>;
  feedLoading: boolean;
};

export type SocialProps = {
  publicationsFeed: (Post | Quote | Mirror)[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  dispatch: Dispatch<AnyAction>;
  feedLoading: boolean;
};

export type useFeedResults = {
  publicationsFeed: (Post | Quote | Mirror)[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  feedLoading: boolean;
};

export type GridProps = {
  publicationsFeed: (Post | Quote | Mirror)[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  dispatch: Dispatch<AnyAction>;
  feedLoading: boolean;
};

export type GridSmallProps = {
  publicationsFeed: (Post | Quote | Mirror)[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  queryWindowSize300: boolean;
};

export type DisplayProps = {
  shop: any;
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

export type useFormResults = {
  setSubmitSuccess: (e: boolean) => void;
  submitSuccess: boolean;
  handleSubmitForm: (e: any) => Promise<void>;
};

export type HomeProps = {
  queryWindowSize2XL: boolean;
  queryWindowSize300: boolean;
  queryWindowSize400: boolean;
  queryWindowInbetween: boolean;
  shop: any;
  router: NextRouter;
};

export type RefactorElementProps = {
  setRefactorModal: (e: {
    open: boolean;
    transparency: boolean;
  }) => void;
  transparency: boolean;
};

export type useTvResults = {
  refreshImages: () => void;
  newImages: string[];
};

export type useStickyStateResults = {
  setItem: (value: string) => void;
  value: string | null;
};

export type MetadataProps = {
  token: any;
  connect: any;
  errorMessage: boolean;
  collectNFT: () => Promise<void>;
  isLoading: boolean;
  collectMarket: () => Promise<void>;
  isSuccess: boolean;
  loading: boolean;
  data: boolean;
};

export type CollectProps = {
  token: any;
  connect: any;
  errorMessage: boolean;
  collectNFT: () => Promise<void>;
  isLoading: boolean;
  collectMarket: () => Promise<void>;
  isSuccess: boolean;
  loading: boolean;
  data: boolean;
};

export type useMetadataResults = {
  collectNFT: () => Promise<void>;
  collectMarket: () => Promise<void>;
  errorState: boolean;
  prepareNFTDataCollection: (
    address: string,
    price: number,
    amount: number
  ) => void;
  prepareNFTDataMarket: (
    address: string,
    price: number,
    amount: number
  ) => void;
  errorMessage: boolean;
  setAbiFunction: (e: string) => void;
  isLoading: boolean;
  loading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: boolean;
};

export type useApproveResults = {
  prepareApproval: () => void;
  approveAddress: () => Promise<void>;
  isLoading: boolean;
  loading: boolean;
  isSuccess: boolean;
};

export type PreOrderProps = {
  heartColor: string;
};

export type TokenDetailsProps = {
  token: any;
  heartColor: string;
};

export type IndexProps = {
  message: string | undefined;
  distanceFromBottom: number;
};

export interface ApprovalArgs {
  to: string;
  from: string;
  data: string;
}

export type CommentsProps = {
  commentors: Comment[];
  video: Post;
  getMorePostComments: () => Promise<void>;
  commentsLoading: boolean;
  hasMoreComments: boolean;
  mirrorCommentLoading: boolean[];
  likeCommentLoading: boolean[];
  collectCommentLoading: boolean[];
  likeComment: (id?: string) => Promise<void>;
  collectComment: (id?: string) => Promise<void>;
  mirrorComment: (id?: string) => Promise<void>;
  dispatch: Dispatch<AnyAction>;
  commentId: string;
  lensProfile: Profile | undefined;
};

export type NoHandleProps = {
  dispatch: Dispatch<AnyAction>;
};

export type PlayerProps = {
  streamRef: Ref<ReactPlayer>;
  mainVideo: MainVideoState;
  volume: number;
  wrapperRef: Ref<HTMLDivElement>;
  dispatchVideos: Post[];
  videoSync: VideoSyncState;
  dispatch: Dispatch<AnyAction>;
  hasMore: boolean;
  fetchMoreVideos: () => Promise<
    | { videos: any[]; mirrors: any[]; collects: boolean[]; likes: any[] }
    | undefined
  >;
  videoLoading: boolean;
  setVideoLoading: (e: boolean) => void;
};

export type LoadingProps = {
  size: string;
};

export enum MediaType {
  Video,
  Image,
  Gif,
}

export interface UploadedMedia {
  cid: string;
  type: MediaType;
}

export type ImageUploadsProps = {
  handleRemoveImage: (e: UploadedMedia, feed?: boolean) => void;
  commentLoading: boolean;
  postImagesDispatched?: UploadedMedia[];
};

export type OptionsCommentProps = {
  videoLoading: boolean;
  imageLoading: boolean;
  commentLoading: boolean;
  uploadImages: (e: FormEvent) => Promise<void>;
  uploadVideo: (e: FormEvent) => Promise<void>;
  setGifOpen: (e: boolean) => void;
  gifOpen: boolean;
  collectOpen: boolean;
  postImages: UploadedMedia[];
  dispatch: Dispatch<AnyAction>;
};

export type CollectButtonProps = {
  values?: string[] | Erc20[];
  col: string;
  row: string;
  openDropdown: boolean;
  handleOpenDropdown: (e: boolean) => void;
  selectValue: string | undefined;
  selectFunction: (e: string) => void;
  label: string;
  mixtape?: boolean;
};

export type ComponentProps = {
  streamRef: Ref<ReactPlayer>;
  mainVideo: MainVideoState;
  isPlaying: boolean;
  volume: number;
  dispatchVideos: Post[];
  videoSync: VideoSyncState;
  dispatch: Dispatch<AnyAction>;
  hasMore: boolean;
  fetchMoreVideos: () => Promise<
    | { videos: any[]; mirrors: any[]; collects: boolean[]; likes: any[] }
    | undefined
  >;
  videoLoading: boolean;
  setVideoLoading: (e: boolean) => void;
};

export type CollectInfoProps = {
  buttonText: string;
  symbol?: string;
  value?: string;
  limit?: string;
  time?: string;
  totalCollected?: number;
  canClick?: boolean;
  isApproved?: boolean;
  approveCurrency?: () => Promise<void>;
  handleCollect?: (id?: string) => Promise<void>;
  collectLoading: boolean;
  approvalLoading?: boolean;
  handleLensSignIn: () => Promise<void>;
  commentId: string;
  openConnectModal: (() => void) | undefined;
  lensProfile: string | undefined;
  address: `0x${string}` | undefined;
};

export type FullScreenVideoProps = {
  openConnectModal: (() => void) | undefined;
  dispatch: Dispatch<AnyAction>;
  mainVideo: MainVideoState;
  videoRef: Ref<HTMLDivElement>;
  streamRef: Ref<ReactPlayer>;
  wrapperRef: Ref<HTMLDivElement>;
  dispatchVideos: Post[];
  videoSync: VideoSyncState;
  mirrorLoading: boolean;
  collectLoading: boolean;
  likeLoading: boolean;
  lensProfile: Profile | undefined;
  hasMore: boolean;
  connected: boolean;
  commentors: Comment[];
  handleLensSignIn: () => Promise<void>;
  fetchMoreVideos: () => Promise<
    | { videos: any[]; mirrors: any[]; collects: boolean[]; likes: any[] }
    | undefined
  >;
  videoLoading: boolean;
  setVideoLoading: (e: boolean) => void;
  handleHeart: () => void;
  collected: boolean;
  mirrored: boolean;
  liked: boolean;
  mirrorVideo: () => Promise<void>;
  likeVideo: () => Promise<void>;
  collectVideo: () => Promise<void>;
  volume: number;
  volumeOpen: boolean;
  setVolumeOpen: (volumeOpen: boolean) => void;
  handleVolumeChange: (e: FormEvent) => void;
  progressRef: Ref<HTMLDivElement>;
  handleSeek: (
    e: MouseEvent<HTMLDivElement, MouseEvent<Element, MouseEvent>>
  ) => void;
  formatTime: (time: number) => string;
  collectAmount: number[];
  mirrorAmount: number[];
  likeAmount: number[];
  getMorePostComments: () => Promise<void>;
  commentsLoading: boolean;
  hasMoreComments: boolean;
  mirrorCommentLoading: boolean[];
  likeCommentLoading: boolean[];
  collectCommentLoading: boolean[];
  commentId: string;
  commentsOpen: boolean;
  setCommentsOpen: (e: boolean) => void;
};

export type FollowerOnlyProps = {
  profile: Profile | undefined;
  followProfile: () => Promise<void>;
  followLoading: boolean;
  approved: boolean;
  approveCurrency: () => Promise<void>;
  dispatch: Dispatch<AnyAction>;
  followDetails: FollowerOnlyState;
};

export type WhoProps = {
  accounts: any[];
  fetchMore: () => Promise<void>;
  loading: boolean;
  dispatch: Dispatch<AnyAction>;
  hasMore: boolean;
  type: number;
};

export type ControlsProps = {
  videoSync: VideoSyncState;
  lensProfile: Profile | undefined;
  formatTime: (time: number) => string;
  volume: number;
  connected: boolean;
  handleLensSignIn: () => Promise<void>;
  volumeOpen: boolean;
  setVolumeOpen: (volumeOpen: boolean) => void;
  handleVolumeChange: (e: FormEvent) => void;
  handleHeart: () => void;
  collected: boolean;
  mirrored: boolean;
  liked: boolean;
  mirrorVideo: () => Promise<void>;
  likeVideo: () => Promise<void>;
  collectVideo: () => Promise<void>;
  mirrorLoading: boolean;
  collectLoading: boolean;
  likeLoading: boolean;
  mainVideo: MainVideoState;
  progressRef: Ref<HTMLDivElement>;
  handleSeek: (
    e: MouseEvent<HTMLDivElement, MouseEvent<Element, MouseEvent>>
  ) => void;
  dispatchVideos: Post[];
  collectAmount: number[];
  mirrorAmount: number[];
  likeAmount: number[];
  dispatch: Dispatch<AnyAction>;
  hasMore: boolean;
  fetchMoreVideos: () => Promise<
    | { videos: any[]; mirrors: any[]; collects: boolean[]; likes: any[] }
    | undefined
  >;
  videoLoading: boolean;
  setVideoLoading: (e: boolean) => void;
  openConnectModal: (() => void) | undefined;
};

export type PurchaseProps = {
  collectInfoLoading: boolean;
  approvalLoading: boolean;
  address: `0x${string}` | undefined;
  collectModuleValues: PostCollectValuesState;
  lensProfile: string;
  collectComment: (id?: any) => Promise<void>;
  collectLoading: boolean;
  approveCurrency: () => Promise<void>;
  handleLensSignIn: () => Promise<void>;
  commentId: string;
  dispatch: Dispatch<AnyAction>;
  openConnectModal: (() => void) | undefined;
};

export interface CollectValueType {
  freeCollectModule?: {
    followerOnly: boolean;
  };
  simpleCollectModule?: {
    collectLimit: string;
    followerOnly: boolean;
  };
  revertCollectModule?: boolean;
  feeCollectModule?: {
    amount: {
      currency: string;
      value: string;
    };
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
  };
  limitedFeeCollectModule?: {
    collectLimit: string;
    amount: {
      currency: string;
      value: string;
    };
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
  };
  limitedTimedFeeCollectModule?: {
    collectLimit: string;
    amount: {
      currency: string;
      value: string;
    };
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
  };
  timedFeeCollectModule?: {
    amount: {
      currency: string;
      value: string;
    };
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
  };
}

export type ImageLargeProps = {
  mainImage: string;
  dispatch: Dispatch<AnyAction>;
  type: string;
};

export type CollectInputProps = {
  id: string;
  name: string;
  step?: string;
  min?: string;
  placeholder?: string;
  defaultValue?: string;
  col?: string;
  row?: string;
  label?: string;
  handleValueChange: (e: number) => void;
};

export type QuoteProps = {
  publication: Comment | Post | Quote;
};

export type ProfileSideBarProps = {
  publication: Post | Mirror | Quote;
  dispatch: Dispatch<AnyAction>;
};

export interface QuickProfilesInterface {
  handle: string;
  id: string;
  image: string;
  followModule: FollowModule;
  name: string;
  ownedBy: string;
  followedByMe: boolean
}

export type QuickProfilesProps = {
  quickProfiles: QuickProfilesInterface[];
};

export type SuperFollowProps = {
  dispatch: Dispatch<AnyAction>;
  followSuper: () => Promise<void>;
  quickProfiles: QuickProfilesInterface[];
  superCreatorLoading: boolean;
  rain: boolean;
  canvasRef: Ref<HTMLCanvasElement>;
  handleLensSignIn: () => Promise<void>;
  signInLoading: boolean;
  openConnectModal: (() => void) | undefined;
  lensProfile: boolean;
  connected: boolean;
};

export type ReactionProps = {
  textColor: string;
  commentColor: string;
  mirrorColor: string;
  collectColor: string;
  heartColor: string;
  hasCollected: boolean | undefined;
  hasMirrored: boolean | undefined;
  hasReacted: boolean | undefined;
  dispatch: Dispatch<AnyAction>;
  publication: Post | Quote | Mirror;
  reactAmount: number;
  collectAmount: number;
  mirrorAmount: number;
  commentAmount: number;
};
