import getPublications from "@/graphql/lens/queries/getPublications";
import { CHROMADIN_ID } from "@/lib/constants";
import {
  LimitType,
  PublicationMetadataMainFocusType,
  PublicationType,
} from "@/lib/generated";
import {
  FullScreenVideoState,
  setFullScreenVideo,
} from "@/redux/reducers/fullScreenVideoSlice";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Dispatch } from "redux";

const useVideo = (
  fullScreenVideo: FullScreenVideoState,
  dispatch: Dispatch
) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const wrapperRef = useRef<Draggable | null>(null);
  const [videoLoading, setVideoLoading] = useState<{
    play: boolean;
    next: boolean;
    videos: boolean;
  }>({
    play: false,
    next: false,
    videos: false,
  });

  const handlePlayPause = async (): Promise<void> => {
    if (videoLoading?.play) return;
    setVideoLoading((prev) => ({
      ...prev,
      play: true,
    }));
    try {
      const video = videoRef?.current;
      if (video && video.readyState >= 3) {
        if (video?.paused) {
          await video.play();
          dispatch(
            setFullScreenVideo({
              actionOpen: fullScreenVideo?.open,
              actionTime: fullScreenVideo?.currentTime,
              actionDuration: fullScreenVideo?.duration,
              actionIsPlaying: true,
              actionVolume: fullScreenVideo?.volume,
              actionVolumeOpen: fullScreenVideo?.volumeOpen,
              actionAllVideos: fullScreenVideo?.allVideos,
              actionCursor: fullScreenVideo?.cursor,
              actionIndex: fullScreenVideo?.index,
            })
          );
        } else {
          video.pause();
          dispatch(
            setFullScreenVideo({
              actionOpen: fullScreenVideo?.open,
              actionTime: fullScreenVideo?.currentTime,
              actionDuration: fullScreenVideo?.duration,
              actionIsPlaying: false,
              actionVolume: fullScreenVideo?.volume,
              actionVolumeOpen: fullScreenVideo?.volumeOpen,
              actionAllVideos: fullScreenVideo?.allVideos,
              actionCursor: fullScreenVideo?.cursor,
              actionIndex: fullScreenVideo?.index,
            })
          );
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setVideoLoading((prev) => ({
      ...prev,
      play: false,
    }));
  };

  const handleSeek = (e: MouseEvent<HTMLDivElement>): void => {
    const progressRect = e.currentTarget.getBoundingClientRect();
    const seekFraction = (e.clientX - progressRect.left) / progressRect.width;

    const video = videoRef?.current;

    if (video && Number.isFinite(video.duration)) {
      const seekTime = seekFraction * video.duration;
      if (Number.isFinite(seekTime)) {
        video.currentTime = seekTime;
      }
    }
  };

  const handleNextVideo = async (forward: boolean): Promise<void> => {
    setVideoLoading((prev) => ({
      ...prev,
      next: true,
    }));
    try {
      if (
        forward &&
        fullScreenVideo?.index + 1 >= fullScreenVideo?.allVideos?.length
      ) {
        await getVideos(fullScreenVideo?.index + 1);
      } else {
        let index = fullScreenVideo?.index;

        if (forward) {
          index = index + 1;
        } else {
          if (index - 1 < 0) {
            index = fullScreenVideo?.allVideos?.length - 1;
          } else {
            index = index - 1;
          }
        }

        dispatch(
          setFullScreenVideo({
            actionOpen: fullScreenVideo?.open,
            actionTime: 0,
            actionDuration: fullScreenVideo?.duration,
            actionIsPlaying: fullScreenVideo?.isPlaying,
            actionVolume: fullScreenVideo?.volume,
            actionVolumeOpen: fullScreenVideo?.volumeOpen,
            actionAllVideos: fullScreenVideo?.allVideos,
            actionCursor: fullScreenVideo?.cursor,
            actionIndex: index,
          })
        );
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setVideoLoading((prev) => ({
      ...prev,
      next: false,
    }));
  };
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const video = videoRef?.current;
    const newVolume = parseFloat(e.target.value);
    if (Number.isFinite(newVolume) && video) {
      video.volume = newVolume;
    }
  };

  const getVideos = async (newIndex?: number): Promise<void> => {
    setVideoLoading((prev) => ({
      ...prev,
      videos: true,
    }));
    try {
      const data = await getPublications({
        cursor: fullScreenVideo?.cursor,
        limit: LimitType.Ten,
        where: {
          publicationTypes: [PublicationType.Post],
          from: [CHROMADIN_ID],
          metadata: {
            mainContentFocus: [PublicationMetadataMainFocusType.Video],
          },
        },
      });

      dispatch(
        setFullScreenVideo({
          actionOpen: fullScreenVideo?.open,
          actionTime: 0,
          actionDuration: fullScreenVideo?.duration,
          actionIsPlaying: fullScreenVideo?.isPlaying,
          actionVolume: fullScreenVideo?.volume,
          actionVolumeOpen: fullScreenVideo?.volumeOpen,
          actionAllVideos: [
            ...fullScreenVideo?.allVideos,
            ...(data?.data?.publications?.items || []),
          ],
          actionCursor: data?.data?.publications?.pageInfo?.next,
          actionIndex: newIndex ? newIndex : 0,
        })
      );
    } catch (err: any) {
      console.error(err.message);
    }
    setVideoLoading((prev) => ({
      ...prev,
      videos: false,
    }));
  };

  useEffect(() => {
    if (fullScreenVideo?.open && fullScreenVideo?.allVideos?.length < 1) {
      getVideos();
    }
  }, [fullScreenVideo?.open]);

  return {
    videoRef,
    videoLoading,
    handleNextVideo,
    handlePlayPause,
    handleSeek,
    handleVolumeChange,
    wrapperRef,
  };
};

export default useVideo;
