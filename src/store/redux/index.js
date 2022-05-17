import { configureStore } from "@reduxjs/toolkit";

import burger from "./slice/burger";
import selectValue from "./slice/selectValue";

export const getBurgerState = state => state.burger;
export const getSelectValueState = state => state.selectValue;

export const store = configureStore({
  reducer: {
    burger,
    selectValue
  },

  devTools: process.env.NODE_ENV !== "production",
});
