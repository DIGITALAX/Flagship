import { createSlice } from "@reduxjs/toolkit";

export interface RefactorState {
  open: boolean;
  transparency: boolean;
}

const initialRefactorState: RefactorState = {
  open: false,
  transparency: false,
};

export const refactorSlice = createSlice({
  name: "refactor",
  initialState: initialRefactorState,
  reducers: {
    setRefactor: (
      state: RefactorState,
      { payload: { actionOpen, actionTransparency } }
    ) => {
      state.open = actionOpen;
      state.transparency = actionTransparency;
    },
  },
});

export const { setRefactor } = refactorSlice.actions;

export default refactorSlice.reducer;
