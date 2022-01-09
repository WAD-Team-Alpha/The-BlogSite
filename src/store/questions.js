import { createSlice } from "@reduxjs/toolkit";

//fetching the question ids of the user to show in the profile page
const initialQuestionsState = [];

const questionsSlice = createSlice({
  name: "questionsData",
  initialState: initialQuestionsState, //intializing the initial state in the store
  reducers: {
    addQuestion(state, action) { //storing the user created question details
      console.log("This is questions.js???")
      state.push({
        questionId : action.payload.questionId,
        userId : action.payload.userId,
        publishedDate : action.payload.publishedDate,
        question : action.payload.question,
        imageUrl : action.payload.imageUrl,
        description : action.payload.description,
        likes : action.payload.likes,
        comments : action.payload.comments,
        bookmarks : action.payload.bookmarks,
        status : action.payload.status,
        author: action.payload.author,
      });
      console.log(action.payload.bookmarks)
      console.log(action.payload.questionId);
      console.log(action.payload.userId);
    //   console.log("question updated in store");
    },
  },
});

export const questionsActions = questionsSlice.actions; //exporting the reducers

export default questionsSlice.reducer; //exporting the store