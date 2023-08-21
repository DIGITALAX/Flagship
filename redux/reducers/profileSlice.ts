import { Profile } from "@/components/Common/types/lens.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  profile: Profile | undefined;
}

const initialProfileState: ProfileState = {
  profile: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    setProfile: (
      state: ProfileState,
      action: PayloadAction<Profile | undefined>
    ) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
