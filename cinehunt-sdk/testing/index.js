import {getMovieByName, getMovieById, getTenRandomMovies} from 'cinehunt-sdk'; 
// const cinehunt = require('cinehunt-sdk');

const cinehuntSDK = new CineHuntSdk("https://search.imdbot.workers.dev"); 

getMovieByName("Fall").then((movieList) => {
    console.log(movieList);
})

getMovieById("tt3484800").then((movieData) => {
    console.log(movieData);
    console.log('User reviews: ', movieData.review.userReviews)
})

getTenRandomMovies().then((movieList) => {
    console.log(movieList);
})