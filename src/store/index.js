import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";
import postsReducer from "./posts"
import questionReducer from "./question";
import questionsReducer from "./questions"
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post : postReducer,
    posts : postsReducer,
    question : questionReducer,
    questions : questionsReducer
  },
});

export default store;
