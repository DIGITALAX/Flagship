import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/generated";

export interface ChannelsState {
  value: Post[];
}

const initialChannelsState: ChannelsState = {
  value: [],
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState: initialChannelsState,
  reducers: {
    setChannelsRedux: (state: ChannelsState, action: PayloadAction<Post[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setChannelsRedux } = channelsSlice.actions;

export default channelsSlice.reducer;
