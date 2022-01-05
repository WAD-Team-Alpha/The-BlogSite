import { createSlice } from "@reduxjs/toolkit";

const initialpoststate = {
    banner: "https://picsum.photos/200",
    title: "",
    description: "",
    likes: 0,
    comments: 0,
    author: "",
    publishedDate: ""
};

const postdetails = createSlice({
    name: "postdetails",
    initialState: initialpoststate,
    reducers: {
        update(state, action) {

        },
    },
});