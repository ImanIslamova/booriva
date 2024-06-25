import { configureStore } from '@reduxjs/toolkit';
import wish from './wishSlice/wishSlice';
import size from './sizeSlice/sizeSlice';
import cart from './cartSlice/cartSlice';


export const store = configureStore({
  reducer: {
    wish,
    size,
    cart
  },
})