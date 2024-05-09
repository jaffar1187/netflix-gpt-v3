import { configureStore } from "@reduxjs/toolkit";
//Default import just name change, aka adding slice to store.
import userReducer from "../utils/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
