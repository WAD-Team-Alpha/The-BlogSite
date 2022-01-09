import { createSlice } from "@reduxjs/toolkit";

const initialQuestionState = {
  questionId: "",
  likes: 0,
  userId: "",
  publishedDate: "",
  question: "",
  imageUrl: "",
  description: "",
  comments: [],
  bookmarks : 0,
  status: "active",
  author: ""
};

const questionSlice = createSlice({
  name: "questionmData",
  initialState: initialQuestionState,
  reducers: {
    add(state, action) {
      console.log(action.payload);
      state.questionId = action.payload.questionId;
      state.userId = action.payload.userId;
      state.publishedDate = action.payload.publishedDate;
      state.question = action.payload.question;
      state.imageUrl = action.payload.imageUrl;
      state.description = action.payload.description;
      state.likes = action.payload.likes;
      state.comments = action.payload.comments;
      state.bookmarks = action.payload.bookmarks;
      state.status = action.payload.status;
      state.author = action.payload.author;
      console.log("question updated in store");
      console.log(action.payload.bookmarks);
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;