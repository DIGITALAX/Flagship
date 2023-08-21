import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CanCommentState {
  value: boolean;
}

const initialCanCommentState: CanCommentState = {
  value: true,
};

export const canCommentSlice = createSlice({
  name: "canComment",
  initialState: initialCanCommentState,
  reducers: {
    setCanComment: (state: CanCommentState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setCanComment } = canCommentSlice.actions;

export default canCommentSlice.reducer;
