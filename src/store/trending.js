import { createSlice } from "@reduxjs/toolkit";

const initialTrendData = {
    data: []
};

const trendingSlice = createSlice({
  name: "trendData",
  initialState: initialTrendData,
  reducers: {
    addPosts(state, action) {
        console.log("this is executing for trend data");
        state.data = action.payload
        console.log(state);
        console.log(action.payload);
    },
  },
});

export const trendingActions = trendingSlice.actions;

export default trendingSlice.reducer;
