import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },

  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
});


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
