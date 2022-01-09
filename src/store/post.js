import { createSlice } from "@reduxjs/toolkit";

//Intial state of the posts details
const initialpostState = {
  postId: "",
  likes: 0,
  uid: "",
  publishedDate: "",
  bookmarks: 0,
  postTitle: "",
  imageUrl: "",
  postSummary: "",
  postData: [],
  comments: [],
  genre: "",

};

const postSlice = createSlice({
  name: "postData",
  initialState: initialpostState, //intializing the intialstate of the posts in this store
  reducers: {
    add(state, action) {  //function/reducer for adding the created posts into the store
      console.log(action.payload);
      state.postId = action.payload.postId;
      state.uid = action.payload.uid;
      state.publishedDate = action.payload.publishedDate;
      state.postTitle = action.payload.postTitle;
      state.imageUrl = action.payload.imageUrl;
      state.postSummary = action.payload.postSummary;
      state.postData = action.payload.postData;
      state.likes = action.payload.likes;
      state.bookmarks = action.payload.bookmarks;
      state.comments = action.payload.comments;
      state.genre = action.payload.genre;
      console.log("post updated in store");
    },
  },
});

export const postActions = postSlice.actions; //exporting the actions of the post i.e add

export default postSlice.reducer; //exporting the reducer
