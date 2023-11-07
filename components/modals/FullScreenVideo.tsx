import Image from "next/image";
import { FunctionComponent } from "react";
import Draggable from "react-draggable";
import lodash from "lodash";
import { INFURA_GATEWAY } from "../../lib/lens/constants";
import { setVideoPlayer } from "../../redux/reducers/videoPlayerSlice";
import Player from "./Lens/Player";
import Controls from "./Lens/Controls";
import Comments from "./Lens/Comments";
import { FullScreenVideoProps } from "../../types/general.types";

const FullScreenVideo: FunctionComponent<FullScreenVideoProps> = ({
  dispatch,
  mainVideo,
  videoRef,
  streamRef,
  wrapperRef,
  dispatchVideos,
  videoSync,
  hasMore,
  fetchMoreVideos,
  videoLoading,
  setVideoLoading,
  profileId,
  likeAmount,
  formatTime,
  volume,
  likeLoading,
  mirrorLoading,
  collectVideo,
  mirrorVideo,
  collectLoading,
  mirrorAmount,
  collectAmount,
  handleHeart,
  handleVolumeChange,
  volumeOpen,
  setVolumeOpen,
  collected,
  mirrored,
  liked,
  likeVideo,
  progressRef,
  handleSeek,
  hasMoreComments,
  commentsLoading,
  commentors,
  getMorePostComments,
  collectCommentLoading,
  mirrorCommentLoading,
  likeCommentLoading,
  commentId,
  commentsOpen,
  setCommentsOpen,
  handleLensSignIn,
  connected,
  openConnectModal,
  lensProfile
}): JSX.Element => {
  return (
    <Draggable
      cancel=".frame, .expand, .close"
      enableUserSelectHack={false}
      nodeRef={videoRef as any}
    >
      <div
        className={`absolute z-20 h-fit cursor-grab active:cursor-grabbing items-center justify-center rounded-lg top-40 left-0 sm:left-1/3 flex flex-col xl:w-1/3 sm:w-1/2 w-full`}
        ref={videoRef as any}
      >
        <div
          className={`relative h-96 md:h-98 flex flex-col gap-4 items-center justify-center w-full px-3 pt-2 sm:px-8 pb-8 sm:pt-4 border-4 border-black rounded-lg w-full`}
          id="videoplayer"
        >
          <div className="relative w-full h-fit flex flex-row items-center">
            <div
              className="expand"
              onClick={() => setCommentsOpen(!commentsOpen)}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/Qmf6evtDntW5NPNp5vcGRpyG2LgK6qg5ndJ3kw7cNy4BuK`}
                width={25}
                height={25}
                draggable={false}
              />
            </div>
            <div
              className="close"
              onClick={() => dispatch(setVideoPlayer(false))}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/QmRtXzfqbJXXZ6fReUihpauh9nz6pmjUv5CKGm3oXquzh4`}
                // layout="fill"
                width={25}
                height={25}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-full h-full justify-self-end row-start-2 border border-offBlue col-start-1 rounded-md bg-black">
            <Player
              streamRef={streamRef}
              mainVideo={mainVideo}
              wrapperRef={wrapperRef}
              dispatchVideos={dispatchVideos}
              volume={volume}
              videoSync={videoSync}
              dispatch={dispatch}
              hasMore={hasMore}
              fetchMoreVideos={fetchMoreVideos}
              videoLoading={videoLoading}
              setVideoLoading={setVideoLoading}
            />
          </div>
          <div className="frame">
            <Controls
              connected={connected}
              formatTime={formatTime}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              volumeOpen={volumeOpen}
              setVolumeOpen={setVolumeOpen}
              handleHeart={handleHeart}
              collected={collected}
              mirrored={mirrored}
              liked={liked}
              likeVideo={likeVideo}
              collectVideo={collectVideo}
              mirrorVideo={mirrorVideo}
              profileId={profileId}
              likeLoading={likeLoading}
              mirrorLoading={mirrorLoading}
              collectLoading={collectLoading}
              mainVideo={mainVideo}
              progressRef={progressRef}
              handleSeek={handleSeek}
              dispatchVideos={dispatchVideos}
              collectAmount={collectAmount}
              mirrorAmount={mirrorAmount}
              likeAmount={likeAmount}
              videoSync={videoSync}
              dispatch={dispatch}
              hasMore={hasMore}
              fetchMoreVideos={fetchMoreVideos}
              videoLoading={videoLoading}
              setVideoLoading={setVideoLoading}
              handleLensSignIn={handleLensSignIn}
              openConnectModal={openConnectModal}
            />
          </div>
        </div>
        {commentsOpen && (
          <div className="relative h-96 flex w-full">
            <Comments
              commentors={commentors}
              getMorePostComments={getMorePostComments}
              commentsLoading={commentsLoading}
              video={
                lodash.find(dispatchVideos, {
                  id: mainVideo.id,
                })!
              }
              hasMoreComments={hasMoreComments}
              mirrorComment={mirrorVideo}
              collectComment={collectVideo}
              likeComment={likeVideo}
              likeCommentLoading={likeCommentLoading}
              mirrorCommentLoading={mirrorCommentLoading}
              collectCommentLoading={collectCommentLoading}
              dispatch={dispatch}
              commentId={commentId}
              lensProfile={lensProfile}
            />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default FullScreenVideo;
