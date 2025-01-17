import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/count/countSlice.js';

const store = configureStore({
  reducer: {
    counter: countReducer, 
  },
});

export default store;
