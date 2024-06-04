import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    size: "XS - S",
  },
  reducers: {
    chooseSizes: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { chooseSizes } = sizeSlice.actions;

export default sizeSlice.reducer;
