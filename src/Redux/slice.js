import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    toggle: false,
    user: null,
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
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
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
  setUser,
  clearUser,
} = slice.actions;

export default slice;