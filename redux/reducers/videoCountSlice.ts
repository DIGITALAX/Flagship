import { createSlice } from "@reduxjs/toolkit";

export interface VideoCountState {
  like: number[];
  mirror: number[];
  collect: number[];
}

const initialVideoCountState: VideoCountState = {
  like: [],
  mirror: [],
  collect: [],
};

export const videoCountSlice = createSlice({
  name: "videoCount",
  initialState: initialVideoCountState,
  reducers: {
    setVideoCount: (
      state: VideoCountState,
      { payload: { actionLike, actionMirror, actionCollect } }
    ) => {
      state.like = actionLike;
      state.mirror = actionMirror;
      state.collect = actionCollect;
    },
  },
});

export const { setVideoCount } = videoCountSlice.actions;

export default videoCountSlice.reducer;
