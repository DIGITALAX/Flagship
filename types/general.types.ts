export interface Gallery {
  name: string;
  image: string;
  blurred: string;
  width: number;
  height: number;
  price?: number;
  amount?: number;
  collection?: string;
  description?: string;
  graph?: string;
  edition?: string;
  contract?: string;
  type?: string;
  realm?: string;
  realmLink?: string;
  trueImage?: string;
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
};

export type GalleryProps = {
  currentImages: Gallery[];
  more: boolean;
  setExpressInterest: (e: string) => void;
  queryWindowSize2XL: boolean;
};

export interface Blender {
  image: string;
  blurred: string;
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
  setRefactorModal: (e: boolean) => void;
};

export type ShelfProps = {
  setRefactorModal: (e: boolean) => void;
};

export type FeedProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  reactionsFeed: any[];
  reactionLoaded: boolean[];
};

export type SocialProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  reactionsFeed: any[];
  reactionLoaded: boolean[];
};

export type useFeedResults = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  reactionsFeed: any[];
  reactionLoaded: boolean[];
};

export type GridProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  reactionsFeed: any[];
  reactionLoaded: boolean[];
};

export type GridSmallProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  queryWindowSize300: boolean;
  reactionsFeed: any[];
  reactionLoaded: boolean[];
};

export type DisplayProps = {
  shop: any;
  setExpressInterest: (e: string) => void;
  queryWindowSize2XL: boolean;
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
  shop: any;
};

export type RefactorElementProps = {
  setRefactorModal: (e: boolean) => void;
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
