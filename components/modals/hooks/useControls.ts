import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import LensHubProxy from "../../../abis/LensHubProxy.json";
import { splitSignature } from "ethers/lib/utils.js";
import { omit } from "lodash";
import ReactPlayer from "react-player";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { polygon } from "viem/chains";
import useInteractions from "./useInteractions";
import { RootState } from "../../../redux/store";
import { setVideoSync } from "../../../redux/reducers/videoSyncSlice";
import { setReactId } from "../../../redux/reducers/reactIdSlice";
import addReaction from "../../../graphql/mutations/react";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import handleIndexCheck from "../../../lib/lens/helpers/handleIndexCheck";
import { mirror, mirrorDispatcher } from "../../../graphql/mutations/mirror";
import broadcast from "../../../graphql/mutations/broadcast";
import collect from "../../../graphql/mutations/collect";
import { setPurchase } from "../../../redux/reducers/purchaseSlice";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import checkDispatcher from "../../../lib/lens/helpers/checkDispatcher";
import {
  getPublication,
  getPublicationAuth,
} from "../../../graphql/queries/getPublication";
import { ApprovedAllowanceAmount } from "../../../types/lens.types";
import checkApproved from "../../../lib/lens/helpers/checkApproved";
import { setPostCollectValues } from "../../../redux/reducers/postCollectValuesSlice";
import pollUntilIndexed from "../../../graphql/queries/checkIndexed";
import { setSeek } from "../../../redux/reducers/seekSlice";
import { LENS_HUB_PROXY_ADDRESS_MATIC } from "../../../lib/lens/constants";

const useControls = () => {
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http(),
  });
  const { commentors } = useInteractions();
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
  const dispatch = useDispatch();
  const { address } = useAccount();
  const dispatcher = useSelector(
    (state: RootState) => state.app.dispatcherReducer.value
  );
  const seek = useSelector((state: RootState) => state.app.seekReducer.seek);
  const profileId = useSelector(
    (state: RootState) => state.app.profileReducer.profile?.id
  );
  const videoSync = useSelector(
    (state: RootState) => state.app.videoSyncReducer
  );
  const fullScreenVideo = useSelector(
    (state: RootState) => state.app.videoPlayerReducer
  );
  const authStatus = useSelector(
    (state: RootState) => state.app.authStatusReducer.value
  );
  const mainVideo = useSelector(
    (state: RootState) => state.app.mainVideoReducer
  );
  const approvalArgs = useSelector(
    (state: RootState) => state.app.approvalArgsReducer.args
  );
  const purchase = useSelector((state: RootState) => state.app.purchaseReducer);

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
    let index: any, react: any;
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
    if (!profileId && !authStatus) {
      setLikeLoading(false);
      if (index >= 0) {
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
        profileId: profileId,
        reaction: "UPVOTE",
        publicationId: id ? id : mainVideo.id,
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
    let index: any;

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

    if (!profileId && !authStatus) {
      setMirrorLoading(false);
      if (index >= 0) {
        setMirrorCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
      return;
    }
    let mirrorPost: any;
    try {
      if (dispatcher) {
        mirrorPost = await mirrorDispatcher({
          profileId: profileId,
          publicationId: id ? id : mainVideo.id,
          referenceModule: {
            followerOnlyReferenceModule: false,
          },
        });
        dispatch(
          setIndexModal({
            actionValue: true,
            actionMessage: "Indexing Interaction",
          })
        );
        setTimeout(async () => {
          await handleIndexCheck(
            mirrorPost?.data?.createMirrorViaDispatcher?.txHash,
            dispatch,
            true
          );
        }, 7000);
      } else {
        mirrorPost = await mirror({
          profileId: profileId,
          publicationId: id ? id : mainVideo.id,
          referenceModule: {
            followerOnlyReferenceModule: false,
          },
        });

        const typedData: any = mirrorPost.data.createMirrorTypedData.typedData;

        const clientWallet = createWalletClient({
          chain: polygon,
          transport: custom((window as any).ethereum),
        });

        const signature: any = await clientWallet.signTypedData({
          domain: omit(typedData?.domain, ["__typename"]),
          types: omit(typedData?.types, ["__typename"]),
          primaryType: "MirrorWithSig",
          message: omit(typedData?.value, ["__typename"]),
          account: address as `0x${string}`,
        });

        const broadcastResult: any = await broadcast({
          id: mirrorPost?.data?.createMirrorTypedData?.id,
          signature,
        });

        if (broadcastResult?.data?.broadcast?.__typename !== "RelayerResult") {
          const { v, r, s } = splitSignature(signature);
          const { request } = await publicClient.simulateContract({
            address: LENS_HUB_PROXY_ADDRESS_MATIC,
            abi: LensHubProxy,
            functionName: "mirrorWithSig",
            chain: polygon,
            args: [
              {
                profileId: typedData.value.profileId,
                profileIdPointed: typedData.value.profileIdPointed,
                pubIdPointed: typedData.value.pubIdPointed,
                referenceModuleData: typedData.value.referenceModuleData,
                referenceModule: typedData.value.referenceModule,
                referenceModuleInitData:
                  typedData.value.referenceModuleInitData,
                sig: {
                  v,
                  r,
                  s,
                  deadline: typedData.value.deadline,
                },
              },
            ],
            account: address,
          });
          const res = await clientWallet.writeContract(request);
          await publicClient.waitForTransactionReceipt({ hash: res });
          dispatch(
            setIndexModal({
              actionValue: true,
              actionMessage: "Indexing Interaction",
            })
          );
          await handleIndexCheck(res, dispatch, true);
        } else {
          dispatch(
            setIndexModal({
              actionValue: true,
              actionMessage: "Indexing Interaction",
            })
          );
          setTimeout(async () => {
            await handleIndexCheck(
              broadcastResult?.data?.broadcast?.txHash,
              dispatch,
              true
            );
          }, 7000);
        }
      }
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
    let index: any;
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

    if (!profileId && !authStatus) {
      setCollectLoading(false);
      if (index >= 0) {
        setCollectCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
      return;
    }
    try {
      const collectPost = await collect({
        publicationId: id ? id : mainVideo.id,
      });
      const typedData: any = collectPost.data.createCollectTypedData.typedData;
      const clientWallet = createWalletClient({
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      const signature: any = await clientWallet.signTypedData({
        domain: omit(typedData?.domain, ["__typename"]),
        types: omit(typedData?.types, ["__typename"]),
        primaryType: "CollectWithSig",
        message: omit(typedData?.value, ["__typename"]),
        account: address as `0x${string}`,
      });
      const broadcastResult: any = await broadcast({
        id: collectPost?.data?.createCollectTypedData?.id,
        signature,
      });

      if (broadcastResult?.data?.broadcast?.__typename !== "RelayerResult") {
        const { v, r, s } = splitSignature(signature);
        const { request } = await publicClient.simulateContract({
          address: LENS_HUB_PROXY_ADDRESS_MATIC,
          abi: LensHubProxy,
          functionName: "collectWithSig",
          chain: polygon,
          args: [
            {
              collector: address,
              profileId: typedData.value.profileId,
              pubId: typedData.value.pubId,
              data: typedData.value.data,
              sig: {
                v,
                r,
                s,
                deadline: typedData.value.deadline,
              },
            },
          ],
          account: address,
        });
        const res = await clientWallet.writeContract(request);
        dispatch(
          setPurchase({
            actionOpen: false,
            actionId: "",
            actionIndex: undefined,
          })
        );
        await publicClient.waitForTransactionReceipt({ hash: res });
        dispatch(
          setIndexModal({
            actionValue: true,
            actionMessage: "Indexing Interaction",
          })
        );
        await handleIndexCheck(res, dispatch, true);
      } else {
        dispatch(
          setIndexModal({
            actionValue: true,
            actionMessage: "Indexing Interaction",
          })
        );
        setTimeout(async () => {
          await handleIndexCheck(
            broadcastResult?.data?.broadcast?.txHash,
            dispatch,
            false
          );
        }, 7000);
      }
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
      if (index >= 0) {
        setCollectCommentLoading((prev) => {
          const updatedArray = [...prev];
          updatedArray[index] = false;
          return updatedArray;
        });
      }
    }
  };

  useEffect(() => {
    checkDispatcher(dispatch, profileId);
  }, [profileId]);

  const getCollectInfo = async (): Promise<void> => {
    setCollectInfoLoading(true);
    try {
      let pubData: any;
      if (profileId) {
        const { data } = await getPublicationAuth(
          {
            publicationId: purchase.id,
          },
          profileId
        );
        pubData = data;
      } else {
        const { data } = await getPublication({
          publicationId: purchase.id,
        });
        pubData = data;
      }
      const collectModule = pubData?.publication?.collectModule;

      const approvalData: ApprovedAllowanceAmount | void = await checkApproved(
        collectModule?.amount?.asset?.address,
        collectModule?.type,
        null,
        null,
        collectModule?.amount?.value,
        dispatch,
        address,
        profileId
      );
      const isApproved = parseInt(approvalData?.allowance as string, 16);
      dispatch(
        setPostCollectValues({
          actionType: collectModule?.type,
          actionLimit: collectModule?.collectLimit,
          actionRecipient: collectModule?.recipient,
          actionReferralFee: collectModule?.referralFee,
          actionEndTime: collectModule?.endTimestamp,
          actionValue: collectModule?.value,
          actionFollowerOnly: collectModule?.followerOnly,
          actionAmount: {
            asset: {
              address: collectModule?.amount?.asset?.address,
              decimals: collectModule?.amount?.asset?.decimals,
              name: collectModule?.amount?.asset?.name,
              symbol: collectModule?.amount?.asset?.symbol,
            },
            value: collectModule?.amount?.value,
          },
          actionCanCollect: pubData?.publication?.hasCollectedByMe,
          actionApproved:
            collectModule?.type === "FreeCollectModule" ||
            isApproved > collectModule?.amount?.value ||
            (collectModule?.__typename === "SimpleCollectModuleSettings" &&
              !collectModule.amount &&
              !collectModule.optionalCollectLimit &&
              !collectModule.optionalEndTimestamp)
              ? true
              : false,
          actionTotalCollects:
            pubData?.publication?.stats?.totalAmountOfCollects,
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
        value: BigInt(approvalArgs?.data as string),
      });
      await publicClient.waitForTransactionReceipt({ hash: res });
      await pollUntilIndexed(res as string, false);
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
    fullVideoRef.current?.seekTo(seekPosition, "fraction");
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
    authStatus,
    profileId,
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
