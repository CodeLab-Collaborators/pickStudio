import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  user: "" || null,
};

const reduxState = createSlice({
  name: "pickAStudio",
  initialState,
  reducers: {
    addImages: (state, { payload }) => {
      state.images = payload;
    },

    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { addImages, logOutUser, loginUser } = reduxState.actions;

export default reduxState.reducer;
