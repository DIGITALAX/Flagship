import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VideoPlayerState {
  open: boolean;
}

const initialVideoPlayerState: VideoPlayerState = {
  open: false,
};

export const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState: initialVideoPlayerState,
  reducers: {
    setVideoPlayer: (
      state: VideoPlayerState,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
  },
});

export const { setVideoPlayer } = videoPlayerSlice.actions;

export default videoPlayerSlice.reducer;
