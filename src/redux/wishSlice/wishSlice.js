import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wish: localStorage.getItem("wish")
      ? JSON.parse(localStorage.getItem("wish"))
      : [],
  },
  reducers: {
    setWish: (state, { payload }) => {
      state.wish = payload;
    },

    addWishList: (state, { payload }) => {
      if (state.wish.includes(payload)) {
        state.wish = state.wish.filter((wishId) => wishId !== payload);
      } else {
        localStorage.setItem("wish", JSON.stringify([...state.wish, payload]));
        //setisActive((prev) => !prev);
        state.wish = localStorage.getItem("wish")
          ? JSON.parse(localStorage.getItem("wish"))
          : [];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWish, addWishList } = wishSlice.actions;

export default wishSlice.reducer;
