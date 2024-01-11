import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { polygon } from "viem/chains";
import {
  VideoSyncState,
  setVideoSync,
} from "../../../redux/reducers/videoSyncSlice";
import { setReactId } from "../../../redux/reducers/reactIdSlice";
import addReaction from "../../../graphql/mutations/react";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import {
  getPublication,
  getPublicationAuth,
} from "../../../graphql/queries/getPublication";
import checkApproved from "../../../lib/lens/helpers/checkApproved";
import { setPostCollectValues } from "../../../redux/reducers/postCollectValuesSlice";
import { setSeek } from "../../../redux/reducers/seekSlice";
import { FetchResult } from "@apollo/client";
import {
  AddReactionMutation,
  ApprovalAllowance,
  Comment,
  Post,
  Profile,
  PublicationQuery,
  PublicationReactionType,
  SimpleCollectOpenActionSettings,
} from "../../../types/generated";
import mirrorSig from "../../../lib/lens/helpers/mirrorSig";
import actSig from "../../../lib/lens/helpers/actSig";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import { AnyAction, Dispatch } from "redux";
import { ApprovalArgs } from "../../../types/general.types";
import { PurchaseState } from "../../../redux/reducers/purchaseSlice";
import { MainVideoState } from "../../../redux/reducers/mainVideoSlice";
import { VideoPlayerState } from "../../../redux/reducers/videoPlayerSlice";

const useControls = (
  address: `0x${string}` | undefined,
  dispatch: Dispatch<AnyAction>,
  commentors: Comment[],
  seek: number,
  lensProfile: Profile | undefined,
  videoSync: VideoSyncState,
  fullScreenVideo: VideoPlayerState,
  mainVideo: MainVideoState,
  approvalArgs: ApprovalArgs | undefined,
  purchase: PurchaseState
) => {
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
  });
  const streamRef = useRef<ReactPlayer>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fullVideoRef = useRef<ReactPlayer>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(1);
  const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [collectLoading, setCollectLoading] = useState<boolean>(false);
  const [mirrorLoading, setMirrorLoading] = useState<boolean>(false);
  const [approvalLoading, setApprovalLoading] = useState<boolean>(false);
  const [collectInfoLoading, setCollectInfoLoading] = useState<boolean>(false);
  const [mirrorCommentLoading, setMirrorCommentLoading] = useState<boolean[]>(
    Array.from({ length: commentors?.length }, () => false)
  );
  const [likeCommentLoading, setLikeCommentLoading] = useState<boolean[]>(
    Array.from({ length: commentors?.length }, () => false)
  );
  const [collectCommentLoading, setCollectCommentLoading] = useState<boolean[]>(
    Array.from({ length: commentors?.length }, () => false)
  );

  const handleHeart = () => {
    dispatch(
      setVideoSync({
        actionHeart: true,
        actionDuration: videoSync.duration,
        actionCurrentTime: videoSync.currentTime,
        actionIsPlaying: videoSync.isPlaying,
        actionLikedArray: videoSync.likedArray,
        actionMirroredArray: videoSync.mirroredArray,
        actionCollectedArray: videoSync.collectedArray,
        actionVideosLoading: videoSync.videosLoading,
      })
    );
    setTimeout(() => {
      dispatch(
        setVideoSync({
          actionHeart: false,
          actionDuration: videoSync.duration,
          actionCurrentTime: videoSync.currentTime,
          actionIsPlaying: videoSync.isPlaying,
          actionLikedArray: videoSync.likedArray,
          actionMirroredArray: videoSync.mirroredArray,
          actionCollectedArray: videoSync.collectedArray,
          actionVideosLoading: videoSync.videosLoading,
        })
      );
    }, 3000);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleVolumeChange = (e: FormEvent) => {
    setVolume(parseFloat((e.target as HTMLFormElement).value));
  };

  const likeVideo = async (id?: string): Promise<void> => {
    let index: number, react: FetchResult<AddReactionMutation>;
    if (!id) {
      setLikeLoading(true);
      dispatch(setReactId(mainVideo.id));
    } else {
      index = commentors?.findIndex((commentor) => commentor.id === id);
      if (index >= 0) {
        setLikeCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = true;
          return updatedArray;
        });
      }
      setLikeLoading(true);
    }
    if (!lensProfile?.id) {
      setLikeLoading(false);
      if (index! >= 0) {
        setLikeCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
      return;
    }
    try {
      react = await addReaction({
        for: id ? id : mainVideo?.id,
        reaction: PublicationReactionType.Upvote,
      });
    } catch (err: any) {
      setLikeLoading(false);
      console.error(err.message);
    }
    if (!id) {
      setLikeLoading(false);
    } else {
      setLikeCommentLoading((prev) => {
        const updatedArray = [...prev];
        updatedArray[index] = false;
        return updatedArray;
      });
    }
    dispatch(
      setIndexModal({
        actionValue: true,
        actionMessage: "Successfully Indexed",
      })
    );
    setTimeout(() => {
      dispatch(
        setIndexModal({
          actionValue: false,
          actionMessage: undefined,
        })
      );
    }, 4000);
  };

  const mirrorVideo = async (id?: string): Promise<void> => {
    let index: number;

    if (!id) {
      setMirrorLoading(true);
      dispatch(setReactId(mainVideo.id));
    } else {
      index = commentors.findIndex((commentor) => commentor.id === id);
      if (index >= 0) {
        setMirrorCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = true;
          return updatedArray;
        });
      }
    }

    if (!lensProfile?.id) {
      setMirrorLoading(false);
      if (index! >= 0) {
        setMirrorCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
      return;
    }
    try {
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      await mirrorSig(
        id ? id : mainVideo.id,
        clientWallet,
        publicClient,
        address as `0x${string}`,
        dispatch
      );
    } catch (err: any) {
      console.error(err.message);
    }
    if (!id) {
      setMirrorLoading(false);
    } else {
      setMirrorCommentLoading((prev) => {
        const updatedArray = [...prev];
        updatedArray[index] = false;
        return updatedArray;
      });
    }
  };

  const collectVideo = async (id?: string): Promise<void> => {
    let index: number;
    if (!id) {
      setCollectLoading(true);
      dispatch(setReactId(mainVideo.id));
    } else {
      index = commentors.findIndex((commentor) => commentor.id === id);
      if (index >= 0) {
        setCollectCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = true;
          return updatedArray;
        });
      }
    }

    if (!lensProfile?.id) {
      setCollectLoading(false);
      if (index! >= 0) {
        setCollectCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
      return;
    }
    try {
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      await actSig(
        id ? id : mainVideo.id,
        {
          simpleCollectOpenAction: true,
        },
        clientWallet,
        publicClient,
        address as `0x${string}`,
        dispatch
      );
    } catch (err: any) {
      setCollectLoading(false);
      if (err.message.includes("You do not have enough")) {
        dispatch(
          setModalOpen({
            actionOpen: true,
            actionMessage: "Insufficient Balance to Collect.",
          })
        );
      }
      console.error(err.message);
    }
    if (!id) {
      setCollectLoading(false);
    } else {
      if (index! >= 0) {
        setCollectCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
    }
  };

  const getCollectInfo = async (): Promise<void> => {
    setCollectInfoLoading(true);
    try {
      let pubData: PublicationQuery;
      if (lensProfile?.id) {
        const { data } = await getPublicationAuth({
          forId: purchase.id,
        });
        pubData = data!;
      } else {
        const { data } = await getPublication({
          forId: purchase.id,
        });
        pubData = data!;
      }
      const collectModule = (pubData?.publication as Post)
        ?.openActionModules?.[0] as SimpleCollectOpenActionSettings;

      const approvalData: ApprovalAllowance | void = await checkApproved(
        collectModule?.amount?.asset?.contract.address,
        collectModule?.type,
        null,
        null,
        collectModule?.amount?.value,
        dispatch,
        address,
        lensProfile?.id
      );
      const isApproved = parseInt(approvalData?.allowance?.value as string, 16);
      dispatch(
        setPostCollectValues({
          actionType: collectModule?.type,
          actionLimit: collectModule?.collectLimit,
          actionRecipient: collectModule?.recipient,
          actionReferralFee: collectModule?.referralFee,
          actionEndTime: collectModule?.endsAt,
          actionValue: collectModule?.amount.value,
          actionFollowerOnly: collectModule?.followerOnly,
          actionAmount: {
            asset: {
              address: collectModule?.amount?.asset?.contract,
              decimals: collectModule?.amount?.asset?.decimals,
              name: collectModule?.amount?.asset?.name,
              symbol: collectModule?.amount?.asset?.symbol,
            },
            value: collectModule?.amount?.value,
          },
          actionCanCollect: true,
          actionApproved: isApproved,
          actionTotalCollects: (pubData?.publication as Post)?.stats
            ?.countOpenActions,
        })
      );
    } catch (err: any) {
      console.error(err.message);
    }
    setCollectInfoLoading(false);
  };

  const callApprovalSign = async (): Promise<void> => {
    try {
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      const res = await clientWallet.sendTransaction({
        to: approvalArgs?.to as `0x${string}`,
        account: approvalArgs?.from as `0x${string}`,
        data: approvalArgs?.data as `0x${string}`,
        value: BigInt("0"),
      });
      await publicClient.waitForTransactionReceipt({ hash: res });
      await getCollectInfo();
    } catch (err: any) {
      setApprovalLoading(false);
      console.error(err.message);
    }
  };

  const approveCurrency = async (): Promise<void> => {
    setApprovalLoading(true);
    try {
      await callApprovalSign();
    } catch (err: any) {
      console.error(err.message);
    }
    setApprovalLoading(false);
  };

  const handleSeek = (
    e: MouseEvent<HTMLDivElement, MouseEvent<Element, MouseEvent>>
  ) => {
    const progressRect = e.currentTarget.getBoundingClientRect();
    const seekPosition = (e.clientX - progressRect.left) / progressRect.width;
    // setCurrentTime(seekPosition * duration);
    dispatch(setSeek(seekPosition));
    streamRef.current?.seekTo(seekPosition, "fraction");
  };

  useEffect(() => {
    if (seek !== 0) {
      fullVideoRef?.current?.seekTo(seek, "fraction");
    }
  }, [seek]);

  useEffect(() => {
    if (fullScreenVideo.open) {
      dispatch(
        setVideoSync({
          actionHeart: videoSync.heart,
          actionDuration: videoSync.duration,
          actionCurrentTime: videoSync.currentTime,
          actionIsPlaying: false,
          actionLikedArray: videoSync.likedArray,
          actionMirroredArray: videoSync.mirroredArray,
          actionCollectedArray: videoSync.collectedArray,
          actionVideosLoading: videoSync.videosLoading,
        })
      );
      streamRef?.current?.seekTo(videoSync.currentTime, "seconds");
      fullVideoRef?.current?.seekTo(videoSync.currentTime, "seconds");
      setTimeout(() => {
        dispatch(
          setVideoSync({
            actionHeart: videoSync.heart,
            actionDuration: videoSync.duration,
            actionCurrentTime: videoSync.currentTime,
            actionIsPlaying: true,
            actionLikedArray: videoSync.likedArray,
            actionMirroredArray: videoSync.mirroredArray,
            actionCollectedArray: videoSync.collectedArray,
            actionVideosLoading: videoSync.videosLoading,
          })
        );
      }, 1000);
    }
  }, [fullScreenVideo.open]);

  useEffect(() => {
    if (purchase.open) {
      getCollectInfo();
    }
  }, [purchase.open]);

  return {
    formatTime,
    volume,
    volumeOpen,
    setVolumeOpen,
    handleHeart,
    mirrorLoading,
    collectLoading,
    likeLoading,
    collectVideo,
    mirrorVideo,
    likeVideo,
    mirrorCommentLoading,
    likeCommentLoading,
    collectCommentLoading,
    approvalLoading,
    collectInfoLoading,
    approveCurrency,
    handleVolumeChange,
    wrapperRef,
    progressRef,
    handleSeek,
    fullVideoRef,
  };
};

export default useControls;
