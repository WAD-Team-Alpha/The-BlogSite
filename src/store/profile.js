import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  firstName: "Username",
  lastName: "",
  email: "",
  bio: "",
  genres: []
};

const profileSlice = createSlice({
  name: "profileData",
  initialState: initialProfileState,
  reducers: {
    update(state, action) {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
      state.genres = action.payload.genres;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
