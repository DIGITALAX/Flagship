import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletConnected {
  value: boolean;
}

const initialWalletConnected: WalletConnected = {
  value: false,
};

export const walletConnectedSlice = createSlice({
  name: "walletConnected",
  initialState: initialWalletConnected,
  reducers: {
    setWalletConnected: (
      state: WalletConnected,
      action: PayloadAction<boolean>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setWalletConnected } = walletConnectedSlice.actions;

export default walletConnectedSlice.reducer;
