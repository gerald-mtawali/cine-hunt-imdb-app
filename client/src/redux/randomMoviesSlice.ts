import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getTenRandomMovies, MovieDTO } from "cinehunt-sdk";

export interface RandomMovieState {
	movies: MovieDTO[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null | undefined;
}

const initialState: RandomMovieState = {
	movies: [],
	status: "idle",
	error: null,
};

export const getRandomMovies = createAsyncThunk(
	"random/fetchMovies",
	async (): Promise<MovieDTO[]> => {
		const movieData = await getTenRandomMovies();
		return movieData as MovieDTO[];
	}
);

export const randomMoviesSlice = createSlice({
	name: "randomMovies",
	initialState,
	reducers: {
		clearMovieData: (state) => {
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
			.addCase(getRandomMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				getRandomMovies.fulfilled,
				(state, action: PayloadAction<MovieDTO[]>) => {
					state.status = "succeeded";
					state.movies = action.payload;
				}
			)
			.addCase(getRandomMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { clearMovieData, setStatus } = randomMoviesSlice.actions;
export const selectRandomMovies = (state: RootState) =>
	state.randomMovies.movies;
export default randomMoviesSlice.reducer;
