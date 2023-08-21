import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthStatusState {
  value: boolean;
}

const initialAuthStatusState: AuthStatusState = {
  value: false,
};

export const authStatusSlice = createSlice({
  name: "authStatus",
  initialState: initialAuthStatusState,
  reducers: {
    setAuthStatus: (state: AuthStatusState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthStatus } = authStatusSlice.actions;

export default authStatusSlice.reducer;
