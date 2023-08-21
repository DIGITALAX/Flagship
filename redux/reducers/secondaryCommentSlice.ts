import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SecondaryCommentState {
  value: string;
}

const initialSecondaryCommentState: SecondaryCommentState = {
  value: "",
};

export const secondaryCommentSlice = createSlice({
  name: "secondaryComment",
  initialState: initialSecondaryCommentState,
  reducers: {
    setSecondaryComment: (
      state: SecondaryCommentState,
      action: PayloadAction<string>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setSecondaryComment } = secondaryCommentSlice.actions;

export default secondaryCommentSlice.reducer;
