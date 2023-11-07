import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimpleCollectOpenActionModuleInput } from "../../types/generated";

export interface CollectValueTypeState {
  type?: SimpleCollectOpenActionModuleInput;
}

const initialCollectValueState: CollectValueTypeState = {
  type: {
    followerOnly: false,
  },
};

export const collectValueTypeSlice = createSlice({
  name: "collectValues",
  initialState: initialCollectValueState,
  reducers: {
    setCollectValueType: (
      state: CollectValueTypeState,
      action: PayloadAction<SimpleCollectOpenActionModuleInput | undefined>
    ) => {
      state.type = action.payload;
    },
  },
});

export const { setCollectValueType } = collectValueTypeSlice.actions;

export default collectValueTypeSlice.reducer;
