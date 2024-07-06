import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
      productLength: 0
  },

  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    setProductsLength: (state, { payload }) => {
      console.log('payload', payload);
      state.productLength = payload
    }

    
  },

});


export const { setCart, setProductsLength } = cartSlice.actions;

export default cartSlice.reducer;
