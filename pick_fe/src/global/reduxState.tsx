import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  user: "" || null,
  studioID: {} || null,
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

    addStudioID: (state, { payload }) => {
      state.studioID = payload;
    },

    removeStudioID: (state) => {
      state.studioID = null;
    },
  },
});

export const { addImages, logOutUser, loginUser, addStudioID, removeStudioID } =
  reduxState.actions;

export default reduxState.reducer;
