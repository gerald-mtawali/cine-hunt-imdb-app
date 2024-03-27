import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getMovieById, MovieDescriptionDTO } from "cinehunt-sdk";

export interface MovieDetails {

}
export interface MovieDetailsState {
    title: string; 
	imdbId: string;
	movieDetails: MovieDescriptionDTO | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null | undefined;
}

const initialState: MovieDetailsState = {
    title: "", 
	imdbId: "",
	movieDetails: null,
	status: "idle",
	error: null,
};

export const getMovieDetails = createAsyncThunk(
	"film/fetchMovieDetails",
	async (imdbId: string): Promise<MovieDescriptionDTO> => {
		const movieDetails = await getMovieById(imdbId);
		return movieDetails as MovieDescriptionDTO;
	}
);
export const movieDetailsSlice = createSlice({
	name: "movieDetails",
	initialState,
	reducers: {
		setImdbId: (state, action: PayloadAction<string>) => {
			state.imdbId = action.payload;
		},
        setTitle: (state, action: PayloadAction<string>)=> {
            state.title = action.payload; 
        } , 
        clearTitle: (state) => {
            state.title=""; 
        }, 
		clearImdbId: (state) => {
			state.imdbId = "";
		},
		clearMovieDetails: (state) => {
			state.movieDetails = null;
		},
		setStatus(
			state,
			action: PayloadAction<"idle" | "loading" | "succeeded" | "failed">
		) {
			state.status = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieDetails.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				getMovieDetails.fulfilled,
				(state, action: PayloadAction<MovieDescriptionDTO>) => {
					state.status = "succeeded";
					state.movieDetails = action.payload;
				}
			)
			.addCase(getMovieDetails.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setImdbId, clearImdbId, setStatus, setTitle, clearTitle} = movieDetailsSlice.actions;

export const selectMovieDetails = (state: RootState) => {state.movieDetails.movieDetails}; 
export const selectImdbId = (state: RootState) => state.movieDetails.imdbId;
export const selectTitle = (state: RootState) => state.movieDetails.title;
export default movieDetailsSlice.reducer;
