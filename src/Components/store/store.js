import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

// to store the movies which were updated
export const store = configureStore({
  reducer: { movies: movieSlice },
});

export default store;
