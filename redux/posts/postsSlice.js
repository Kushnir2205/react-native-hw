import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: "",
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addComment, addPost } = postSlice.actions;
