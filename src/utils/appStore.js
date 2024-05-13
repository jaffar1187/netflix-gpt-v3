import { configureStore } from "@reduxjs/toolkit";
//Default import just name change, aka adding slice to store.
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
