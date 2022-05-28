import { configureStore } from "@reduxjs/toolkit";

import selectValue from "./slice/selectValue";

export const getSelectValueState = state => state.selectValue;

export const store = configureStore({
  reducer: {
    selectValue
  },

  devTools: process.env.NODE_ENV !== "production",
});
