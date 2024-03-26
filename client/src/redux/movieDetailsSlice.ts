import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imdbId: '', 
    movieDetails: {}, 
    status: 'idle',
    error: null,
}

export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState, 
    reducers:{}
})

// create a thunk for fetching movie details from the cinehuntsdk api 
