import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CollectOpenState {
  value: boolean;
}

const initialCollectOpenState: CollectOpenState = {
  value: false,
};

export const collectOpenSlice = createSlice({
  name: "collectOpen",
  initialState: initialCollectOpenState,
  reducers: {
    setCollectOpen: (
      state: CollectOpenState,
      action: PayloadAction<boolean>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setCollectOpen } = collectOpenSlice.actions;

export default collectOpenSlice.reducer;
