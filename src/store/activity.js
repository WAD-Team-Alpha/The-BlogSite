import { createSlice } from "@reduxjs/toolkit";

const initialActivity = {
  data: []
};

const activitySlice = createSlice({
  name: "authentication",
  initialState: initialActivity,
  reducers: {
    setActivity(state, action) {
        console.log("This is being set here")
      state.data = action.payload
    },
  },
});

export const activityaActions = activitySlice.actions;

export default activitySlice.reducer;
