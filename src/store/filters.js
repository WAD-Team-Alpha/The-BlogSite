import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "1",
    order: "-1",
};

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        updateFilter(state, action) {
            console.log(action.payload);
            state.filter = action.payload;
        },
        updateOrder(state, action) {
            console.log(action.payload);
            state.order = action.payload;
        },
    },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;