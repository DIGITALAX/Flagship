import NoHandle from "./NoHandle";
import { useEffect, useRef, useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import FullScreenVideo from "./FullScreenVideo";
import Purchase from "./Purchase";
import Who from "./Who";
import FollowerOnly from "./FollowerOnly";
import { useAccount } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useControls from "./hooks/useControls";
import useChannels from "./hooks/useChannels";
import useWho from "./hooks/useWho";
import useInteractions from "./hooks/useInteractions";
import useFollowers from "./hooks/useFollowers";
import useSignIn from "./hooks/useSignIn";
import Index from "./Index";
import ImageLarge from "./ImageLarge";
import FollowSuper from "./FollowSuper";
import useSuperCreator from "./hooks/useSuperCreator";
import { polygonMumbai } from "viem/chains";
import { createPublicClient, http } from "viem";

const Modals = () => {
  const publicClient = createPublicClient({
    chain: polygonMumbai,
    transport: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
  });
  const { address, isConnected } = useAccount();
  const videoRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const videoSync = useSelector(
    (state: RootState) => state.app.videoSyncReducer
  );
  const reactId = useSelector(
    (state: RootState) => state.app.reactIdReducer.value
  );
  const lensProfile = useSelector(
    (state: RootState) => state.app.profileReducer.profile
  );
  const dispatchVideos = useSelector(
    (state: RootState) => state.app.channelsReducer.value
  );
  const fullScreenVideo = useSelector(
    (state: RootState) => state.app.videoPlayerReducer
  );
  const imageModal = useSelector(
    (state: RootState) => state.app.imageViewerReducer
  );
  const mainVideo = useSelector(
    (state: RootState) => state.app.mainVideoReducer
  );
  const connected = useSelector(
    (state: RootState) => state.app.walletConnectedReducer.value
  );
  const superFollow = useSelector(
    (state: RootState) => state.app.superFollowReducer
  );
  const indexModal = useSelector(
    (state: RootState) => state.app.indexModalReducer
  );
  const collectModuleValues = useSelector(
    (state: RootState) => state.app.postCollectValuesReducer
  );
  const reaction = useSelector(
    (state: RootState) => state.app.reactionStateReducer
  );
  const reactions = useSelector(
    (state: RootState) => state.app.videoCountReducer
  );
  const rain = useSelector((state: RootState) => state.app.rainReducer.value);
  const followersModal = useSelector(
    (state: RootState) => state.app.followerOnlyReducer
  );
  const seek = useSelector((state: RootState) => state.app.seekReducer.seek);
  const purchaseModal = useSelector(
    (state: RootState) => state.app.purchaseReducer
  );
  const approvalArgs = useSelector(
    (state: RootState) => state.app.approvalArgsReducer.args
  );
  const hasMore = useSelector(
    (state: RootState) => state.app.hasMoreVideoReducer.value
  );
  const commentId = useSelector(
    (state: RootState) => state.app.secondaryCommentReducer.value
  );
  const noHandle = useSelector((state: RootState) => state.app.noHandleReducer);
  const [distanceFromBottom, setDistanceFromBottom] = useState<number>(10);

  useEffect(() => {
    const handleScroll = () => {
      const distance =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setDistanceFromBottom(distance + 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { handleLensSignIn, signInLoading } = useSignIn(
    dispatch,
    isConnected,
    address
  );
  const {
    commentors,
    getMorePostComments,
    commentsLoading,
    hasMoreComments,
    commentsOpen,
    setCommentsOpen,
  } = useInteractions(lensProfile, mainVideo, commentId, indexModal);
  const { openConnectModal } = useConnectModal();
  const {
    collectInfoLoading: controlsCollectInfoLoading,
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
    approveCurrency,
    handleVolumeChange,
    wrapperRef,
    progressRef,
    handleSeek,
    fullVideoRef,
  } = useControls(
    address,
    dispatch,
    commentors,
    seek,
    lensProfile,
    videoSync,
    fullScreenVideo,
    mainVideo,
    approvalArgs,
    purchaseModal
  );
  const { followSuper, superCreatorLoading, canvasRef, quickProfiles } =
    useSuperCreator(publicClient, dispatch, address, rain, lensProfile);
  const {
    fetchMoreVideos,
    videoLoading: channelVideoLoading,
    setVideoLoading,
  } = useChannels(
    dispatch,
    mainVideo,
    lensProfile,
    dispatchVideos,
    indexModal?.message,
    reactId,
    videoSync,
    reactions
  );
  const {
    reacters,
    mirrorers,
    collectors,
    getMorePostCollects,
    getMorePostMirrors,
    getMorePostReactions,
    mirrorInfoLoading,
    reactInfoLoading,
    collectInfoLoading,
    hasMoreReact,
    hasMoreCollect,
    hasMoreMirror,
  } = useWho(reaction);

  const {
    followProfile,
    profile,
    followLoading,
    approved,
    approveCurrency: approveFollowCurrency,
  } = useFollowers(
    publicClient,
    dispatch,
    address,
    approvalArgs,
    lensProfile,
    followersModal
  );
  return (
    <>
      {fullScreenVideo.open && (
        <FullScreenVideo
          openConnectModal={openConnectModal}
          formatTime={formatTime}
          dispatch={dispatch}
          mainVideo={mainVideo}
          streamRef={fullVideoRef}
          wrapperRef={wrapperRef}
          dispatchVideos={dispatchVideos}
          videoSync={videoSync}
          videoRef={videoRef}
          hasMore={hasMore}
          connected={connected}
          videoLoading={channelVideoLoading}
          setVideoLoading={setVideoLoading}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          volumeOpen={volumeOpen}
          setVolumeOpen={setVolumeOpen}
          handleHeart={handleHeart}
          collected={mainVideo.collected}
          mirrored={mainVideo.mirrored}
          liked={mainVideo.liked}
          mirrorVideo={mirrorVideo}
          collectVideo={collectVideo}
          likeVideo={likeVideo}
          likeLoading={likeLoading}
          collectLoading={collectLoading}
          mirrorLoading={mirrorLoading}
          progressRef={progressRef}
          handleSeek={handleSeek}
          collectAmount={reactions.collect}
          mirrorAmount={reactions.mirror}
          likeAmount={reactions.like}
          fetchMoreVideos={fetchMoreVideos}
          commentId={commentId}
          commentors={commentors}
          collectCommentLoading={collectCommentLoading}
          commentsLoading={commentsLoading}
          mirrorCommentLoading={mirrorCommentLoading}
          likeCommentLoading={likeCommentLoading}
          hasMoreComments={hasMoreComments}
          getMorePostComments={getMorePostComments}
          commentsOpen={commentsOpen}
          setCommentsOpen={setCommentsOpen}
          handleLensSignIn={handleLensSignIn}
          lensProfile={lensProfile}
        />
      )}
      {superFollow?.open && (
        <FollowSuper
          dispatch={dispatch}
          followSuper={followSuper}
          quickProfiles={quickProfiles}
          rain={rain}
          superCreatorLoading={superCreatorLoading}
          canvasRef={canvasRef}
          handleLensSignIn={handleLensSignIn}
          signInLoading={signInLoading}
          openConnectModal={openConnectModal}
          connected={connected}
          lensProfile={lensProfile?.id}
        />
      )}
      {reaction.open && (
        <Who
          accounts={
            reaction.type === "heart"
              ? reacters
              : reaction.type === "mirror"
              ? mirrorers
              : collectors
          }
          fetchMore={
            reaction.type === "heart"
              ? getMorePostReactions
              : reaction.type === "mirror"
              ? getMorePostMirrors
              : getMorePostCollects
          }
          loading={
            reaction.type === "heart"
              ? reactInfoLoading
              : reaction.type === "mirror"
              ? mirrorInfoLoading
              : collectInfoLoading
          }
          dispatch={dispatch}
          hasMore={
            reaction.type === "heart"
              ? hasMoreReact
              : reaction.type === "mirror"
              ? hasMoreMirror
              : hasMoreCollect
          }
          type={
            reaction.type === "heart" ? 0 : reaction.type === "collect" ? 1 : 2
          }
        />
      )}
      {purchaseModal?.open && (
        <Purchase
          dispatch={dispatch}
          collectInfoLoading={controlsCollectInfoLoading}
          approvalLoading={approvalLoading}
          address={address}
          collectModuleValues={collectModuleValues}
          lensProfile={lensProfile?.id}
          collectComment={collectVideo}
          collectLoading={collectCommentLoading[purchaseModal?.index!]}
          approveCurrency={approveCurrency}
          handleLensSignIn={handleLensSignIn}
          commentId={purchaseModal?.id}
          openConnectModal={openConnectModal}
        />
      )}
      {followersModal?.open && (
        <FollowerOnly
          profile={profile}
          followProfile={followProfile}
          followLoading={followLoading}
          approved={approved}
          approveCurrency={approveFollowCurrency}
          dispatch={dispatch}
          followDetails={followersModal}
        />
      )}
      {noHandle.value && <NoHandle dispatch={dispatch} />}
      {indexModal?.value && (
        <Index
          message={indexModal?.message}
          distanceFromBottom={distanceFromBottom}
        />
      )}
      {imageModal?.value && (
        <ImageLarge
          mainImage={imageModal.image}
          dispatch={dispatch}
          type={imageModal.type}
        />
      )}
    </>
  );
};

export default Modals;
