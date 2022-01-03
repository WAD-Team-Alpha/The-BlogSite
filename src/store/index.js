import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";
import  counterReducer  from "./counterReducer";

const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer, counter: counterReducer },
});

export default store;
