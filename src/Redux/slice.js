import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    toggle: false,
    user: null,  // Store user details here
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increment: (state, action) => {
      const productFound = state.cartItems.find(
        (items) => items.id === action.payload
      );
      if (productFound) {
        productFound.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const productFound = state.cartItems.find(
        (items) => items.id === action.payload
      );
      if (productFound && productFound.quantity > 1) {
        productFound.quantity -= 1;
      }
    },
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    setUser: (state, action) => {
      state.user = action.payload;  // Set the user details
    },
    clearUser: (state) => {
      state.user = null;  // Clear user details on logout
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  increment,
  decrement,
  toggle,
  setUser,  // Export the setUser action
  clearUser,  // Export the clearUser action
} = slice.actions;

export default slice;
