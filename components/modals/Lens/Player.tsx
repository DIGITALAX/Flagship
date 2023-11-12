import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import FetchMoreLoading from "./FetchMoreLoading";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { PlayerProps } from "../../../types/general.types";

const Component = dynamic(() => import("./Component"), { ssr: false });

const Player: FunctionComponent<PlayerProps> = ({
  streamRef,
  mainVideo,
  volume,
  wrapperRef,
  dispatchVideos,
  videoSync,
  dispatch,
  hasMore,
  fetchMoreVideos,
  setVideoLoading,
  videoLoading,
}): JSX.Element => {
  return (
    <div
      className={`relative justify-center items-center flex w-full h-full`}
      key={mainVideo.local}
      ref={wrapperRef}
    >
      {videoSync.heart && (
        <Image
          src={`${INFURA_GATEWAY}/ipfs/QmNPPsBttGAxvu6cX3gWT4cnFF8PMF9C55GgJUehGp3nCA`}
          layout="fill"
          objectFit="cover"
          className="absolute w-full h-full flex object-cover z-1"
          draggable={false}
        />
      )}
      {videoSync.videosLoading ? (
        <div
          className={`relative bg-offBlack flex flex-col items-center justify-center w-full h-full`}
        >
          <FetchMoreLoading size="4" />
        </div>
      ) : (
        <Component
          streamRef={streamRef}
          mainVideo={mainVideo}
          isPlaying={videoSync.isPlaying}
          volume={volume}
          dispatchVideos={dispatchVideos}
          videoSync={videoSync}
          dispatch={dispatch}
          hasMore={hasMore}
          fetchMoreVideos={fetchMoreVideos}
          videoLoading={videoLoading}
          setVideoLoading={setVideoLoading}
        />
      )}
    </div>
  );
};

export default Player;
