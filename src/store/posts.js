import { createSlice } from "@reduxjs/toolkit";

const initialpostsState = [];

const postsSlice = createSlice({
  name: "postsData",
  initialState: initialpostsState,
  reducers: {
    addPost(state, action) {
        console.log("line 10 is running");
        state.push({
            postId : action.payload.postId,
            uid : action.payload.uid,
            publishedDate : action.payload.publishedDate,
            postTitle : action.payload.postTitle,
            imageUrl : action.payload.imageUrl,
            postSummary : action.payload.postSummary,
            postData : action.payload.postData,
            likes : action.payload.likes,
            bookmarks : action.payload.bookmarks,
            comments : action.payload.comments,
            genre : action.payload.genre
        });
        console.log(state);
        console.log(action.payload.postId);
        console.log(action.payload.uid);
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
