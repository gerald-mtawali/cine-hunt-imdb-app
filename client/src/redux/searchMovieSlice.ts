import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMovieByName } from "../api/movies";
// import { CineHuntSdk } from "cinehunt-sdk";
import { MovieDTO } from "../api/cinehunt-movies-dtos.types";
import { RootState } from "./store";

export interface MovieResultState {
	name: string;
	movies: MovieDTO[];
	// cinehuntSdk: CineHuntSdk,
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null | undefined;
}

const initialState: MovieResultState = {
	name: "",
	movies: [],
	// cinehuntSdk: new  CineHuntSdk("https://search.imdbot.workers.dev"),
	status: "idle",
	error: null,
};

export const getMovies = createAsyncThunk(
	"search/fetchMovies",
	async (movieName: string): Promise<MovieDTO[]> => {
		const movieData = await getMovieByName(movieName);
		return movieData as MovieDTO[];
	}
);

export const movieResultsSlice = createSlice({
	name: "movieResults",
	initialState,
	reducers: {
		setMovieName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		clearMovieName: (state) => {
			state.name = "";
		},
		clearMovieResults: (state) => {
			state.movies = [];
		},
		setStatus: (
			state,
			action: PayloadAction<"idle" | "loading" | "succeeded" | "failed">
		) => {
			state.status = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				getMovies.fulfilled,
				(state, action: PayloadAction<MovieDTO[]>) => {
					state.status = "succeeded";
					state.movies = action.payload;
				}
			)
			.addCase(getMovies.rejected, (state, action) => {
				(state.status = "failed"), (state.error = action.error.message);
			});
	},
});

export const { setMovieName, clearMovieName, clearMovieResults } =
	movieResultsSlice.actions;

export const selectMovieResults = (state: RootState) =>
	state.movieResults.movies;
export const selectMovieName = (state: RootState) => state.movieResults.name;

export default movieResultsSlice.reducer;
