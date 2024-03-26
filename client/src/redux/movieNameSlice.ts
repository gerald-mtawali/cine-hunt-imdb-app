import { createSlice } from "@reduxjs/toolkit";

export const movieNameSlice = createSlice({
	name: "movieName",
	initialState: { value: "" },
	reducers: {
		setMovieName: (state, action) => {
			state.value = action.payload;
		},
		clearMovieName: (state) => {
			state.value = "";
		},
	},
});

export const { setMovieName, clearMovieName } = movieNameSlice.actions;

export const selectMovieName = (state: any) => state.movieName.value;

export default movieNameSlice.reducer;
