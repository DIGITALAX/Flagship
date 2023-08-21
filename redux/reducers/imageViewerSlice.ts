import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageViewerState {
  value: boolean;
  image: string;
  type: string;
}

const initialImageViewerState: ImageViewerState = {
  value: false,
  image: "",
  type: "",
};

export const imageViewerSlice = createSlice({
  name: "imageViewer",
  initialState: initialImageViewerState,
  reducers: {
    setImageViewer: (
      state: ImageViewerState,
      { payload: { actionValue, actionImage, actionType } }
    ) => {
      state.value = actionValue;
      state.image = actionImage;
      state.type = actionType;
    },
  },
});

export const { setImageViewer } = imageViewerSlice.actions;

export default imageViewerSlice.reducer;
