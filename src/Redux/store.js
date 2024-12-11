import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice"; 

const store = configureStore({
  reducer: {
    myCart: cardSlice.reducer, 
  },
});


export default store;

