import { createSlice } from "@reduxjs/toolkit";

export interface ReactionStateState {
  open: boolean;
  type?: string;
  value?: any;
  mirror?: boolean;
  react?: boolean;
  follower?: boolean;
}

const initialReactionStateState: ReactionStateState = {
  open: false,
  type: undefined,
  value: undefined,
  mirror: undefined,
  react: undefined,
  follower: undefined,
};

export const reactionStateSlice = createSlice({
  name: "reactionState",
  initialState: initialReactionStateState,
  reducers: {
    setReactionState: (
      state: ReactionStateState,
      {
        payload: {
          actionOpen,
          actionType,
          actionValue,
          actionResponseMirror,
          actionResponseReact,
          actionFollower,
        },
      }
    ) => {
      state.open = actionOpen;
      state.type = actionType;
      state.value = actionValue;
      state.mirror = actionResponseMirror;
      state.react = actionResponseReact;
      state.follower = actionFollower;
    },
  },
});

export const { setReactionState } = reactionStateSlice.actions;

export default reactionStateSlice.reducer;
