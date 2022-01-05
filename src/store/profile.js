import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  firstName: "Username",
  lastName: "",
  email: "",
  bio: "",
  genres: [],
  postIds: [],
  questionIds: [],
  followersList:[],
  followingList:[],
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
      state.postIds = action.payload.postIds;
      state.questionIds = action.payload.questionIds;
      state.followersList = action.payload.followersList;
      state.followingList = action.payload.followingList;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
