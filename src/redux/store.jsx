import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./burgerSlice";

export const store = configureStore({
  reducer: {
    burgerReducer,
  },
});
