import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PurchaseState {
  open: boolean;
  id: string;
  index: number | undefined;
}

const initialPurchaseState: PurchaseState = {
  open: false,
  id: "",
  index: undefined,
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: initialPurchaseState,
  reducers: {
    setPurchase: (
      state: PurchaseState,
      { payload: { actionOpen, actionId, actionIndex } }
    ) => {
      state.open = actionOpen;
      state.id = actionId;
      state.index = actionIndex;
    },
  },
});

export const { setPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
