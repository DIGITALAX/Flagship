import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HasMoreVideosState {
  value: boolean;
}

const initialHasMoreVideosState: HasMoreVideosState = {
  value: true,
};

export const hasMoreVideosSlice = createSlice({
  name: "hasMoreVideos",
  initialState: initialHasMoreVideosState,
  reducers: {
    setHasMoreVideosRedux: (state: HasMoreVideosState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setHasMoreVideosRedux } = hasMoreVideosSlice.actions;

export default hasMoreVideosSlice.reducer;
