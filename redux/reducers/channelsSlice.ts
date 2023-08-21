import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Publication } from "../../types/lens.types";

export interface ChannelsState {
  value: Publication[];
}

const initialChannelsState: ChannelsState = {
  value: [],
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState: initialChannelsState,
  reducers: {
    setChannelsRedux: (
      state: ChannelsState,
      action: PayloadAction<Publication[]>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setChannelsRedux } = channelsSlice.actions;

export default channelsSlice.reducer;
