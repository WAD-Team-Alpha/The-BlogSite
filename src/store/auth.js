import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    token: "",
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.data;
            localStorage.setItem("token", action.payload.data);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = "";
            localStorage.removeItem("token");
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
