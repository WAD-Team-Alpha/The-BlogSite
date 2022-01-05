import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  firstName: "Username",
  lastName: "",
  email: "",
  bio: "",
  genres: [],
  followerslist : [{id:1, name:"toast"}, {id:2, name:"rae"}, {id:3, name:"ash"}, {id:4, name:"sykk"}, {id:5,name:"micheal"},{id:6, name:"noname"}],
  followinglist : [{id:1, name:"yvvone"}, {id:2, name:"lily"}, {id:3, name:"poki"}, {id:4, name:"scarra"}, {id:5,name:"john"}],
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
    follow(state){
      state.followerslist.length+=1
  },
  
  remove(state){
      state.followerslist.length-=1
     

  },

  removefollower(state,action){
      return {
         ...state,
         followerslist : state.followerslist.filter((name)=>(name.id)!==action.payload)
      }
  },
  removeuser(state,action){
      return {
         ...state,
         followinglist : state.followinglist.filter((name)=>(name.id)!==action.payload)
      }
  },
 
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
