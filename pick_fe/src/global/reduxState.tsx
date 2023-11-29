import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addImages: (state, { payload }) => {
      state.images = payload;
    },
  },
});

export const { addImages } = reduxState.actions;

export default reduxState.reducer;
