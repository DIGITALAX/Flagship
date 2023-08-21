import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NoHandleState {
  value: boolean;
}

const initialNoHandleState: NoHandleState = {
  value: false,
};

export const noHandleSlice = createSlice({
  name: "noHandle",
  initialState: initialNoHandleState,
  reducers: {
    setNoHandle: (state: NoHandleState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setNoHandle } = noHandleSlice.actions;

export default noHandleSlice.reducer;
