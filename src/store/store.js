import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
});