import { Post } from "@/lib/generated";
import { createSlice } from "@reduxjs/toolkit";

export interface FullScreenVideoState {
  open: boolean;
  currentTime?: number;
  duration?: number;
  isPlaying?: boolean;
  volume?: number;
  volumeOpen?: boolean;
  allVideos: Post[];
  cursor?: string | undefined;
  index: number;
}

const initialFullScreenVideoState: FullScreenVideoState = {
  open: false,
  allVideos: [],
  index: 0,
};

export const fullScreenVideoSlice = createSlice({
  name: "fullScreenVideo",
  initialState: initialFullScreenVideoState,
  reducers: {
    setFullScreenVideo: (
      state: FullScreenVideoState,
      {
        payload: {
          actionOpen,
          actionTime,
          actionDuration,
          actionIsPlaying,
          actionVolume,
          actionVolumeOpen,
          actionAllVideos,
          actionCursor,
          actionIndex,
        },
      }
    ) => {
      state.open = actionOpen;
      state.currentTime = actionTime;
      state.duration = actionDuration;
      state.isPlaying = actionIsPlaying;
      state.volume = actionVolume;
      state.volumeOpen = actionVolumeOpen;
      state.allVideos = actionAllVideos;
      state.cursor = actionCursor;
      state.index = actionIndex;
    },
  },
});

export const { setFullScreenVideo } = fullScreenVideoSlice.actions;

export default fullScreenVideoSlice.reducer;
