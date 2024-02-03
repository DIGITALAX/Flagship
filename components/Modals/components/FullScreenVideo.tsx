import { INFURA_GATEWAY } from "@/lib/constants";
import { Post, VideoMetadataV3 } from "@/lib/generated";
import formatDuration from "@/lib/lens/helpers/formatDuration";
import { setFullScreenVideo } from "@/redux/reducers/fullScreenVideoSlice";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import Draggable from "react-draggable";

import { AiOutlineLoading } from "react-icons/ai";
import { FullScreenVideoProps } from "../types/modals.types";

const FullScreenVideo: FunctionComponent<FullScreenVideoProps> = ({
  dispatch,
  fullScreenVideo,
  videoRef,
  handlePlayPause,
  handleSeek,
  handleNextVideo,
  handleVolumeChange,
  loading,
  wrapperRef,
}): JSX.Element => {
  return (
    <Draggable
      ref={wrapperRef}
      cancel=".close, .volume"
      enableUserSelectHack={false}
    >
      <div
        className={
          "fixed z-50 xl:w-1/3 sm:w-1/2 w-full h-fit px-4 md:px-8 pb-8 pt-4 cursor-grab active:cursor-grabbing items-center justify-center border-4 border-black rounded-lg top-40 left-0 sm:left-10 flex flex-col gap-3"
        }
        id="videoplayer"
      >
        <div className="relative w-full h-fit flex flex-row items-center">
          <div
            className="relative w-fit h-fit justify-start row-start-1 col-start-1 pb-2 cursor-pointer"
            onClick={() =>
              window.open(
                `https://cypher.digitalax.xyz/item/pub/${
                  (fullScreenVideo?.allVideos?.[fullScreenVideo?.index] as Post)
                    ?.id
                }`
              )
            }
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
            onClick={() =>
              dispatch(
                setFullScreenVideo({
                  actionOpen: false,
                  actionTime: fullScreenVideo?.currentTime,
                  actionDuration: fullScreenVideo?.duration,
                  actionIsPlaying: fullScreenVideo?.isPlaying,
                  actionVolume: fullScreenVideo?.volume,
                  actionVolumeOpen: fullScreenVideo?.volumeOpen,
                  actionAllVideos: fullScreenVideo?.allVideos,
                  actionCursor: fullScreenVideo?.cursor,
                  actionIndex: fullScreenVideo?.index,
                })
              )
            }
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
        <div className="relative w-full h-60 flex items-center justify-center rounded-md bg-black border-2 px-2 border-black">
          {loading?.videos ? (
            <div className="relative w-fit h-fit flex items-center justify-center animate-spin opacity-50">
              <AiOutlineLoading size={40} color="white" />
            </div>
          ) : (
            <video
              key={
                (
                  (fullScreenVideo?.allVideos?.[fullScreenVideo?.index] as Post)
                    ?.metadata as VideoMetadataV3
                )?.asset.video?.raw?.uri
              }
              ref={videoRef}
              draggable={false}
              controls={false}
              playsInline
              autoPlay={true}
              className="relative w-full h-full object-cover rounded-md"
              onLoadedMetadata={() => {
                dispatch(
                  setFullScreenVideo({
                    actionOpen: fullScreenVideo?.open,
                    actionTime: fullScreenVideo?.currentTime,
                    actionDuration: videoRef?.current?.duration || 0,
                    actionIsPlaying: fullScreenVideo?.isPlaying,
                    actionVolume: fullScreenVideo?.volume,
                    actionVolumeOpen: fullScreenVideo?.volumeOpen,
                    actionAllVideos: fullScreenVideo?.allVideos,
                    actionCursor: fullScreenVideo?.cursor,
                    actionIndex: fullScreenVideo?.index,
                  })
                );

                if (fullScreenVideo?.currentTime != 0 && videoRef.current) {
                  videoRef.current.currentTime =
                    fullScreenVideo?.currentTime || 0;
                }
              }}
              onTimeUpdate={() =>
                dispatch(
                  setFullScreenVideo({
                    actionOpen: fullScreenVideo?.open,
                    actionTime: videoRef?.current?.currentTime || 0,
                    actionDuration: fullScreenVideo?.duration,
                    actionIsPlaying: fullScreenVideo?.isPlaying,
                    actionVolume: fullScreenVideo?.volume,
                    actionVolumeOpen: fullScreenVideo?.volumeOpen,
                    actionAllVideos: fullScreenVideo?.allVideos,
                    actionCursor: fullScreenVideo?.cursor,
                    actionIndex: fullScreenVideo?.index,
                  })
                )
              }
              onVolumeChange={() =>
                dispatch(
                  setFullScreenVideo({
                    actionOpen: fullScreenVideo?.open,
                    actionTime: fullScreenVideo?.currentTime,
                    actionDuration: fullScreenVideo?.duration,
                    actionIsPlaying: fullScreenVideo?.isPlaying,
                    actionVolume: videoRef?.current?.volume || 0,
                    actionVolumeOpen: fullScreenVideo?.volumeOpen,
                    actionAllVideos: fullScreenVideo?.allVideos,
                    actionCursor: fullScreenVideo?.cursor,
                    actionIndex: fullScreenVideo?.index,
                  })
                )
              }
              onEnded={() => handleNextVideo(true)}
              poster={`${INFURA_GATEWAY}/ipfs/${
                (
                  (fullScreenVideo?.allVideos?.[fullScreenVideo?.index] as Post)
                    ?.metadata as VideoMetadataV3
                )?.asset?.cover?.raw?.uri?.split("ipfs://")?.[1]
              }`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/${
                  (
                    (
                      fullScreenVideo?.allVideos?.[
                        fullScreenVideo?.index
                      ] as Post
                    )?.metadata as VideoMetadataV3
                  )?.asset.video?.raw?.uri?.split("ipfs://")?.[1]
                }`}
              />
            </video>
          )}
        </div>
        <div
          className={`relative h-fit flex w-full gap-3 items-center justify-center flex-col md:flex-row flex-wrap`}
        >
          <div
            className={`relative w-full h-full flex justify-between flex-row flex-wrap items-center gap-3`}
          >
            <div className="relative w-fit h-fit flex items-center justify-center gap-3">
              <div
                className={`relative cursor-pointer w-3 h-3 flex items-center justify-center ${
                  loading?.play && "animate-spin"
                }`}
                onClick={() => !loading?.play && handlePlayPause()}
              >
                {loading?.play ? (
                  <AiOutlineLoading size={15} color="white" />
                ) : (
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${
                      fullScreenVideo?.isPlaying
                        ? "Qmbg8t4xoNywhtCexD5Ln5YWvcKMXGahfwyK6UHpR3nBip"
                        : "QmXw52mJFnzYXmoK8eExoHKv7YW9RBVEwSFtfvxXgy7sfp"
                    }`}
                    draggable={false}
                    layout="fill"
                  />
                )}
              </div>
              <div className="relative w-fit h-full flex items-center font-aust text-xs text-white">
                <span className="text-rosa">
                  {formatDuration(fullScreenVideo?.currentTime || 0)}
                </span>
                /
                <span className="text-light">
                  {formatDuration(fullScreenVideo?.duration || 0)}
                </span>
              </div>
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center gap-3">
              <div
                className=".volume relative cursor-pointer w-3 h-3 flex items-center justify-center"
                onClick={() =>
                  dispatch(
                    setFullScreenVideo({
                      actionOpen: fullScreenVideo?.open,
                      actionTime: fullScreenVideo?.currentTime,
                      actionDuration: fullScreenVideo?.duration,
                      actionIsPlaying: fullScreenVideo?.isPlaying,
                      actionVolume: fullScreenVideo?.volume,
                      actionVolumeOpen: !fullScreenVideo?.volumeOpen,
                      actionAllVideos: fullScreenVideo?.allVideos,
                      actionCursor: fullScreenVideo?.cursor,
                      actionIndex: fullScreenVideo?.index,
                    })
                  )
                }
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/${
                    fullScreenVideo?.volume === 0
                      ? "QmVVzvq68RwGZFi46yKEthuG6PXQf74BaMW4yCrZCkgtzK"
                      : "Qme1i88Yd1x4SJfgrSCFyXp7GELCZRnnPQeFUt6jbfPbqL"
                  }`}
                  layout="fill"
                  alt="volume"
                  draggable={false}
                />
              </div>

              <div
                className="relative cursor-pointer w-3 h-3 flex items-center justify-center -rotate-180"
                onClick={() => !loading?.next && handleNextVideo(false)}
              >
                <Image
                  src={`${INFURA_GATEWAY}/ipfs/QmcYHKZJWJjgibox8iLqNozENnkgD4CZQqYsmmVJpoYUyo`}
                  layout="fill"
                  alt="back"
                  draggable={false}
                />
              </div>
              <div
                className={`relative cursor-pointer w-3 h-3 flex items-center justify-center ${
                  loading?.next && "animate-spin"
                }`}
                onClick={() => !loading?.next && handleNextVideo(true)}
              >
                {loading?.next ? (
                  <AiOutlineLoading size={15} color="white" />
                ) : (
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/QmcYHKZJWJjgibox8iLqNozENnkgD4CZQqYsmmVJpoYUyo`}
                    layout="fill"
                    alt="next"
                    draggable={false}
                  />
                )}
              </div>
            </div>
            {fullScreenVideo?.volumeOpen && (
              <input
                className="volume absolute right-1 bottom-7"
                type="range"
                max={1}
                min={0}
                step={0.01}
                value={fullScreenVideo?.volume}
                onChange={(e) => handleVolumeChange(e)}
              />
            )}
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div
              className="relative w-full h-2 bg-white/40 rounded-sm cursor-pointer"
              onClick={(e) => handleSeek(e)}
            >
              <div
                className="absolute h-full bg-white/80 rounded-sm"
                style={{
                  width: `${
                    ((fullScreenVideo?.currentTime || 0) /
                      (fullScreenVideo?.duration || 0)) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default FullScreenVideo;
