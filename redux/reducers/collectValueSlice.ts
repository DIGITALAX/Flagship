import { CollectValueType } from "@/components/Common/types/common.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CollectValueTypeState {
  type?: CollectValueType;
}

const initialCollectValueState: CollectValueTypeState = {
  type: {
    freeCollectModule: {
      followerOnly: false,
    },
  },
};

export const collectValueTypeSlice = createSlice({
  name: "collectValues",
  initialState: initialCollectValueState,
  reducers: {
    setCollectValueType: (
      state: CollectValueTypeState,
      action: PayloadAction<CollectValueType>
    ) => {
      state.type = action.payload;
    },
  },
});

export const { setCollectValueType } = collectValueTypeSlice.actions;

export default collectValueTypeSlice.reducer;
