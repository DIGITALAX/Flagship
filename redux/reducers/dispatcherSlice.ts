import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DispatcherState {
  value: boolean;
}

const initialDispatcherState: DispatcherState = {
  value: false,
};

export const dispatcherSlice = createSlice({
  name: "dispatcher",
  initialState: initialDispatcherState,
  reducers: {
    setDispatcher: (
      state: DispatcherState,
      action: PayloadAction<boolean>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setDispatcher } = dispatcherSlice.actions;

export default dispatcherSlice.reducer;