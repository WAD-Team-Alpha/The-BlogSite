import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filters";
const store = configureStore({
    reducer: {
        filters: filterReducer,
    },
});

export default store;