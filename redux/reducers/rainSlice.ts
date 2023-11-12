import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RainState {
  value: boolean;
}

const initialRainState: RainState = {
  value: false,
};

export const rainSlice = createSlice({
  name: "rain",
  initialState: initialRainState,
  reducers: {
    setRainRedux: (state: RainState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setRainRedux } = rainSlice.actions;

export default rainSlice.reducer;
