import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReactIdState {
  value?: string;
}

const initialReactIdState: ReactIdState = {
  value: "",
};

export const reactidSlice = createSlice({
  name: "reactid",
  initialState: initialReactIdState,
  reducers: {
    setReactId: (state: ReactIdState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setReactId } = reactidSlice.actions;

export default reactidSlice.reducer;
