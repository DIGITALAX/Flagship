import { createSlice } from "@reduxjs/toolkit";

export interface ModalOpenState {
  open: boolean;
  message: string;
}

const initialModalOpenState: ModalOpenState = {
  open: false,
  message: "",
};

export const modalOpenSlice = createSlice({
  name: "modalOpen",
  initialState: initialModalOpenState,
  reducers: {
    setModalOpen: (
      state: ModalOpenState,
      { payload: { actionOpen, actionMessage } }
    ) => {
      state.open = actionOpen;
      state.message = actionMessage;
    },
  },
});

export const { setModalOpen } = modalOpenSlice.actions;

export default modalOpenSlice.reducer;
