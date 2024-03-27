import { configureStore } from "@reduxjs/toolkit";
import movieResultsReducer from "./searchMovieSlice";
import movieDetailsReducer from "./movieDetailsSlice";
import randomMovieReducer from "./randomMoviesSlice";


export const store = configureStore({
	reducer: {
		movieResults: movieResultsReducer,
        movieDetails: movieDetailsReducer, 
        randomMovies: randomMovieReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
