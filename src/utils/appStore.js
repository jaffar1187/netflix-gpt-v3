import { configureStore } from "@reduxjs/toolkit";
//Default import just name change, aka adding slice to store.
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
