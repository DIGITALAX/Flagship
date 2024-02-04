import FullScreenVideo from "./FullScreenVideo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ImageLarge from "./ImageLarge";
import useVideo from "../hooks/useVideo";
import { RefObject } from "react";
import RefactorElement from "./RefactorElement";

const Modals = () => {
  const dispatch = useDispatch();
  const imageModal = useSelector(
    (state: RootState) => state.app.imageViewerReducer
  );
  const fullScreenVideo = useSelector(
    (state: RootState) => state.app.fullScreenVideoReducer
  );
  const refactorModal = useSelector(
    (state: RootState) => state.app.refactorReducer
  );
  const {
    videoRef,
    videoLoading,
    handleNextVideo,
    handlePlayPause,
    handleSeek,
    handleVolumeChange,
    wrapperRef,
  } = useVideo(fullScreenVideo, dispatch);

  return (
    <>
      {fullScreenVideo?.open && (
        <FullScreenVideo
          dispatch={dispatch}
          fullScreenVideo={fullScreenVideo}
          videoRef={videoRef as RefObject<HTMLVideoElement>}
          loading={videoLoading}
          handleNextVideo={handleNextVideo}
          handlePlayPause={handlePlayPause}
          handleVolumeChange={handleVolumeChange}
          handleSeek={handleSeek}
          wrapperRef={wrapperRef}
        />
      )}
      {imageModal?.value && (
        <ImageLarge
          mainImage={imageModal.image}
          dispatch={dispatch}
          type={imageModal.type}
        />
      )}
      {refactorModal?.open && (
        <RefactorElement
          dispatch={dispatch}
          transparency={refactorModal?.transparency}
        />
      )}
    </>
  );
};

export default Modals;
