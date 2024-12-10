import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: () => {},
    removeItem: () => {},
    clearCart: () => {},
  },
});

export const { addToCart, removeItem, clearCart } = cardSlice.actions;
export default cardSlice;
