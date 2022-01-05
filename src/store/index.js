import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import  counterReducer  from "./counterReducer";
import postFormReducer from "./postForm";

const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer, counter: counterReducer, postForm: postFormReducer},
});

export default store;
