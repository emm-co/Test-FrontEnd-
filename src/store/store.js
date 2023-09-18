import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/management";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  let store = configureStore({
    reducer: {
      ui: userReducer,
    },
  });
  return store;
};

export const wrapper = createWrapper(makeStore);
