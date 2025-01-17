// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Add product to cart
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove product from cart
    },
    clearCart: (state) => {
      state.items = []; // Clear cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
