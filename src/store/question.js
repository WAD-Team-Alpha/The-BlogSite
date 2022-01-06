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
      console.log("question updated in store");
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;