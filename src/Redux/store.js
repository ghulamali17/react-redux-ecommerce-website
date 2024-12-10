import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice"; // Assuming this is where your slice is defined

const store = configureStore({
  reducer: {
    myCart: cardSlice, // Card slice managing cart data
  },
});

export default store;
