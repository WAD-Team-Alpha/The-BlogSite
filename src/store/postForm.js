import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
    postId:"",
    likes: 0,
    uid:"",
    publishedDate:"",
    bookmarks:0,
    postTitle:"",
    imageUrl:"",
    postSummary:"",
    postData:[],
    comments:[]
};

const postFormSlice = createSlice({
  name: "postFormData",
  initialState: initialProfileState,
  reducers: {
    add(state, action) {
      console.log(action.payload);
      state.postId = action.payload.postId;
      state.uid = action.payload.uid;
      state.publishedDate = action.payload.publishedDate;
      state.postTitle = action.payload.title;
      state.imageUrl = action.payload.banner;
      state.postSummary = action.payload.summary;
      state.postData = action.payload.inputList;
    },
  },
});

export const postFormActions = postFormSlice.actions;

export default postFormSlice.reducer;
