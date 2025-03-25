import Image from "next/legacy/image";
import { FunctionComponent, JSX, useState } from "react";
import Waveform from "./Waveform";
import { MediaProps } from "../types/distro.types";
import { INFURA_GATEWAY } from "@/app/lib/constants";

const MediaSwitch: FunctionComponent<MediaProps> = ({
  type,
  srcUrl,
  srcCover,
  classNameVideo,
  classNameImage,
  classNameAudio,
  objectFit,
  hidden,
}): JSX.Element => {
  const [videoInfo, setVideoInfo] = useState<{
    loading: boolean;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
  }>({
    loading: false,
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });
  switch (type?.toLowerCase()) {
    case "video":
      const keyValueVideo = srcUrl;
      return (
        <>
          <div id={keyValueVideo} style={classNameVideo}>
            <video
              style={classNameVideo}
              onTimeUpdate={(e) =>
                setVideoInfo((prev) => ({
                  ...prev,
                  currentTime: (e.target as any)?.currentTime || 0,
                }))
              }
              onCanPlay={() =>
                setVideoInfo((prev) => ({
                  ...prev,
                  isPlaying: true,
                }))
              }
              loop={hidden}
              autoPlay={hidden}
              muted={true}
              poster={srcCover}
              className="object-cover"
            >
              <source
                src={
                  srcUrl?.includes("https://")
                    ? srcUrl
                    : `${INFURA_GATEWAY}/ipfs/${
                        srcUrl?.includes("ipfs://")
                          ? srcUrl?.split("ipfs://")[1]
                          : srcUrl
                      }`
                }
              ></source>
            </video>
          </div>
          {!hidden && (
            <Waveform
              audio={srcUrl}
              type={"video"}
              keyValue={keyValueVideo}
              video={srcUrl}
              handlePauseVideo={() =>
                setVideoInfo((prev) => {
                  return {
                    ...prev,
                    isPlaying: false,
                  };
                })
              }
              handlePlayVideo={() =>
                setVideoInfo((prev) => {
                  return {
                    ...prev,
                    isPlaying: true,
                  };
                })
              }
              handleSeekVideo={(e) =>
                setVideoInfo((prev) => ({
                  ...prev,
                  currentTime: e * videoInfo?.duration,
                }))
              }
              videoInfo={videoInfo}
            />
          )}
        </>
      );

    case "audio":
      const keyValueAudio = srcUrl + Math.random().toString();
      return (
        <>
          <Image
            src={srcCover!}
            layout="fill"
            objectFit={objectFit ? "contain" : "cover"}
            className={classNameAudio}
            draggable={false}
          />
          {!hidden && (
            <Waveform
              audio={srcUrl}
              type={"audio"}
              keyValue={keyValueAudio}
              video={srcUrl}
            />
          )}
        </>
      );

    default:
      return (
        <Image
          src={srcUrl}
          layout="fill"
          objectFit={objectFit ? "contain" : "cover"}
          objectPosition={"center"}
          className={classNameImage}
          draggable={false}
        />
      );
  }
};

export default MediaSwitch;
