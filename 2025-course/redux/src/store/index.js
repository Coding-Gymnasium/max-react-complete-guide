import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counterReducer: counterSlice,
    authReducer: authSlice,
  },
});

export default store;
