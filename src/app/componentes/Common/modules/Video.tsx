import { INFURA_GATEWAY, VIDEOS } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import Marquee from "react-fast-marquee";
import { VideoProps } from "../types/common.types";

const Video: FunctionComponent<VideoProps> = ({
  currentVideo,
  setVideoLoading,
  videoLoading,
}): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <>
      <video
        muted
        loop
        key={currentVideo}
        className="object-cover flex w-full h-full rounded-sm"
        controls={false}
        autoPlay
        onLoadStart={() => setVideoLoading(true)}
        onLoadedMetadata={() => setVideoLoading(false)}
      >
        <source
          src={
            currentVideo !== undefined
              ? `${INFURA_GATEWAY}/ipfs/${VIDEOS[currentVideo]}`
              : undefined
          }
        />
      </video>
      {(videoLoading || currentVideo == undefined) && (
        <div className="absolute top-0 left-0 w-full h-full bg-mainText flex items-center justify-center">
          <div className="relative w-52 h-8 flex items-center justify-center animate-pulse">
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY}/ipfs/QmX8kDkP3rdgqeEauqzsbwL8zP4hGwtTKxrT3Xmw7R2feL`}
              draggable={false}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
