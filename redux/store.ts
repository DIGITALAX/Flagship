import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modalOpenReducer from "./reducers/modalOpenSlice";
import profileReducer from "./reducers/profileSlice";
import noHandleReducer from "./reducers/noHandleSlice";
import collectValueReducer from "./reducers/collectValueSlice";
import collectOpenReducer from "./reducers/collectOpenSlice";
import walletConnectedReducer from "./reducers/walletConnectedSlice";
import videoPlayerReducer from "./reducers/videoPlayerSlice";
import mainVideoReducer from "./reducers/mainVideoSlice";
import secondaryCommentReducer from "./reducers/secondaryCommentSlice";
import videoSyncReducer from "./reducers/videoSyncSlice";
import canCommentReducer from "./reducers/canCommentSlice";
import reactIdReducer from "./reducers/reactIdSlice";
import seekReducer from "./reducers/seekSlice";
import postCollectValuesReducer from "./reducers/postCollectValuesSlice";
import purchaseReducer from "./reducers/purchaseSlice";
import authStatusReducer from "./reducers/authStatusSlice";
import reactionStateReducer from "./reducers/reactionStateSlice";
import followerOnlyReducer from "./reducers/followerOnlySlice";
import channelsReducer from "./reducers/channelsSlice";
import videoCountReducer from "./reducers/videoCountSlice";
import hasMoreVideoReducer from "./reducers/hasMoreVideoSlice";
import indexModalReducer from "./reducers/indexModalSlice";
import approvalArgsReducer from "./reducers/approvalArgsSlice";
import dispatcherReducer from "./reducers/dispatcherSlice";
import imageViewerReducer from "./reducers/imageViewerSlice";

const reducer = combineReducers({
  modalOpenReducer,
  profileReducer,
  noHandleReducer,
  collectValueReducer,
  collectOpenReducer,
  walletConnectedReducer,
  videoPlayerReducer,
  mainVideoReducer,
  secondaryCommentReducer,
  canCommentReducer,
  videoSyncReducer,
  reactIdReducer,
  seekReducer,
  postCollectValuesReducer,
  purchaseReducer,
  authStatusReducer,
  reactionStateReducer,
  followerOnlyReducer,
  channelsReducer,
  videoCountReducer,
  hasMoreVideoReducer,
  indexModalReducer,
  approvalArgsReducer,
  dispatcherReducer,
  imageViewerReducer
});

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;