import { RefObject } from "react";
import WaveSurfer from "wavesurfer.js";

const handlePlayPause = (
  wavesurfer: RefObject<WaveSurfer | null>,
  type: string,
  isPlaying: boolean,
  handlePlayVideo: () => void,
  handlePauseVideo: () => void
) => {
  try {
    if (wavesurfer.current) {
      if (type === "video") {
        if (!isPlaying) {
          handlePlayVideo();
          wavesurfer.current.play();
        } else {
          handlePauseVideo();
          wavesurfer.current.pause();
        }
      } else {
        if (wavesurfer.current.isPlaying()) {
          wavesurfer.current.pause();
        } else {
          wavesurfer.current.play();
        }
      }
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export default handlePlayPause;
