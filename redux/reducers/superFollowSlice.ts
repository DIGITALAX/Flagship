import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SuperFollowState {
  open: boolean;
}

const initialSuperFollowState: SuperFollowState = {
  open: false,
};

export const superFollowSlice = createSlice({
  name: "superFollow",
  initialState: initialSuperFollowState,
  reducers: {
    setSuperFollow: (
      state: SuperFollowState,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
  },
});

export const { setSuperFollow } = superFollowSlice.actions;

export default superFollowSlice.reducer;
