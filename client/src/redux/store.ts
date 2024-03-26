import { configureStore } from "@reduxjs/toolkit";
import movieResultsReducer from "./searchMovieSlice";

export const store = configureStore({
	reducer: {
		movieResults: movieResultsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;
