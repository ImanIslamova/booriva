import { configureStore } from '@reduxjs/toolkit';
import wish from './wishSlice/wishSlice';
import size from './sizeSlice/sizeSlice';

export const store = configureStore({
  reducer: {
    wish,
    size
  },
})