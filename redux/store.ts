import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modalOpenReducer from "./reducers/modalOpenSlice";
import fullScreenVideoReducer from "./reducers/fullScreenVideoSlice";
import imageViewerReducer from "./reducers/imageViewerSlice";

const reducer = combineReducers({
  modalOpenReducer,
  fullScreenVideoReducer,
  imageViewerReducer,
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
