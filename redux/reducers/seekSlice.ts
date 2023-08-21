import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SeekState {
  seek: number;
}

const initialSeekState: SeekState = {
  seek: 0,
};

export const seekSlice = createSlice({
  name: "seek",
  initialState: initialSeekState,
  reducers: {
    setSeek: (state: SeekState, action: PayloadAction<number>) => {
      state.seek = action.payload;
    },
  },
});

export const { setSeek } = seekSlice.actions;

export default seekSlice.reducer;
