import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  firstName: "Username",
  lastName: "",
  email: "",
  bio: "",
  genres: [],
  followersList: [],
  followingList: [],
  postIds: [],
  questionIds: [],
  recentActivity: [],
  savedContent: [],
  likedContent: []
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
      state.recentActivity = action.payload.recentActivity;
      state.savedContent = action.payload.savedContent;
      state.likedContent = action.payload.likedContent;
    },


    removefollower(state, action) {
      return {
        ...state,
        followersList: state.followersList.filter((name) => (name.id) !== action.payload)
      }
    },
    removeuser(state, action) {
      return {
        ...state,
        followingList: state.followingList.filter((name) => (name.id) !== action.payload)
      }
    },

    addBookmark(state, action) {
      return {
        ...state,
        savedContent: [...state.savedContent, action.payload]
      }
    },

    removeBookmark(state, action) {
      return {
        ...state,
        savedContent: state.savedContent.filter(obj => obj.id !== action.payload.id)
      }
    },

    addLikedContent(state, action) {
      return {
        ...state,
        likedContent: [...state.likedContent, action.payload]
      }
    },

    removeLikedContent(state, action) {
      return {
        ...state,
        likedContent: state.likedContent.filter(id => id !== action.payload)
      }
    }
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
