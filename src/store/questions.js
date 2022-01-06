import { createSlice } from "@reduxjs/toolkit";

const initialQuestionsState = [];

const questionsSlice = createSlice({
  name: "questionsData",
  initialState: initialQuestionsState,
  reducers: {
    addQuestion(state, action) {
      console.log("This is running???")
      state.push({
        questionId : action.payload.questionId,
        userId : action.payload.userId,
        publishedDate : action.payload.publishedDate,
        question : action.payload.question,
        imageUrl : action.payload.imageUrl,
        description : action.payload.description,
        likes : action.payload.likes,
        comments : action.payload.comments,
      });
      console.log(action.payload.questionId);
      console.log(action.payload.userId);
    //   console.log("question updated in store");
    },
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;