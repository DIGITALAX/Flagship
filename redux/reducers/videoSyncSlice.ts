import { createSlice } from "@reduxjs/toolkit";

export interface VideoSyncState {
  duration: number;
  currentTime: number;
  heart: boolean;
  isPlaying: boolean;
  likedArray: boolean[];
  mirroredArray: boolean[];
  collectedArray: boolean[];
  videosLoading: boolean;
}

const initialVideoSyncState: VideoSyncState = {
  duration: 0,
  currentTime: 0,
  heart: false,
  isPlaying: false,
  likedArray: [],
  mirroredArray: [],
  collectedArray: [],
  videosLoading: false,
};

export const videoSyncSlice = createSlice({
  name: "videoSync",
  initialState: initialVideoSyncState,
  reducers: {
    setVideoSync: (
      state: VideoSyncState,
      {
        payload: {
          actionDuration,
          actionCurrentTime,
          actionHeart,
          actionLikedArray,
          actionCollectedArray,
          actionMirroredArray,
          actionIsPlaying,
          actionVideosLoading,
        },
      }
    ) => {
      state.duration = actionDuration;
      state.currentTime = actionCurrentTime;
      state.heart = actionHeart;
      state.isPlaying = actionIsPlaying;
      state.likedArray = actionLikedArray;
      state.collectedArray = actionCollectedArray;
      state.mirroredArray = actionMirroredArray;
      state.videosLoading = actionVideosLoading;
    },
  },
});

export const { setVideoSync } = videoSyncSlice.actions;

export default videoSyncSlice.reducer;
