import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post : postReducer,
  },
});

export default store;
