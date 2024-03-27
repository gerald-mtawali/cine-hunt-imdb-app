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
