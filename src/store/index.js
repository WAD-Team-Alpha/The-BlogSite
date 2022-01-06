import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";
import questionReducer from "./question";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post : postReducer,
    post : postReducer,
    question : questionReducer,
  },
});

export default store;
