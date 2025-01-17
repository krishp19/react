import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';  // We will create this slice next

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Registering the cart reducer here
  },
});

export default store;
