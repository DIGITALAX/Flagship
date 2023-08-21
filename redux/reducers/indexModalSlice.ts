import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IndexModalState {
  value: boolean;
  message?: string;
}

const initialIndexModalState: IndexModalState = {
  value: false,
  message: undefined,
};

export const indexModalSlice = createSlice({
  name: "indexModal",
  initialState: initialIndexModalState,
  reducers: {
    setIndexModal: (
      state: IndexModalState,
      { payload: { actionValue, actionMessage } }
    ) => {
      state.value = actionValue;
      state.message = actionMessage;
    },
  },
});
export const { setIndexModal } = indexModalSlice.actions;

export default indexModalSlice.reducer;
