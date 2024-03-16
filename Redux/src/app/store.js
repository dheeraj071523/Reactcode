import { configureStore } from "@reduxjs/toolkit"; // ye to lana hi padega
import todoReducer from "../Feature/todo/todoSlice";

export const store = configureStore({
  // ye object hi leta hai
  reducer: todoReducer, /// ham reduce ki list bhi de sakate the
});
