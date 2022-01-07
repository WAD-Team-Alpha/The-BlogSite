import { createSlice, current } from "@reduxjs/toolkit";

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
  savedContent: []
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

    updateRecentActivity(state, action) {
      var temp
      if(state.recentActivity.filter((obj) => obj.id === action.payload.id) !== []) {
        temp = state.recentActivity.filter((obj) => obj.id !== action.payload.id)
        temp = [action.payload].concat(temp)
        return {
          ...state,
          recentActivity: temp
        }
      }
      if (state.recentActivity.length === 10) {
        console.log("I am in 2nd if")
        temp = state.recentActivity.pop()
        temp = [action.payload].concat(state.recentActivity)
        return {
          ...state,
          recentActivity: temp
        }
      } else {
        console.log("I am in else")
        temp = [action.payload].concat(state.recentActivity)
        return {
          ...state,
          recentActivity: temp
        }
      }
    }
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
