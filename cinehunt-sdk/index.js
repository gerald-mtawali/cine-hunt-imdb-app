import axios from "axios";
import { baseApiUrl } from "./constants.js";
import { generate as titleGenerator } from "random-words";
class CineHuntSdk {
    apiUrl;
    constructor(apiUrl = baseApiUrl) {
        this.apiUrl = apiUrl;
    }
    convertMovieDetails(movieDetailsData) {
        // take the in
        const movieReviews = movieDetailsData.top.featuredReviews.edges.map((review) => {
            return {
                author: review.node.author.nickName,
                reviewSummary: review.node.summary.originalText,
                reviewBody: review.node.text.originalText.plainText,
                reviewRating: review.node.authorRating,
                reviewDate: review.node.submissionDate,
            };
        }); // generate list from the reviews
        const movieGenres = movieDetailsData.short.genre; // generate list of the genres
        const movieActors = movieDetailsData.short.actor.map((actor) => String(actor.name));
        const movieKeyWords = movieDetailsData.short.keywords.split(",");
        const similarMovies = movieDetailsData.main.moreLikeThisTitles.edges.map((similarTitle) => {
            return {
                title: similarTitle.node.titleText.text,
                imdbId: similarTitle.node.id,
                posterImg: similarTitle.node.primaryImage.url,
            };
        });
        const movieDetails = {
            imdbId: movieDetailsData.imdbId,
            title: movieDetailsData.short.name,
            posterImg: movieDetailsData.short.image,
            description: movieDetailsData.short.description,
            type: movieDetailsData.short["@type"],
            year: movieDetailsData.top.releaseYear.year,
            review: {
                aggregateRating: movieDetailsData.short.aggregateRating.ratingValue,
                reviewCount: movieDetailsData.top.reviews.total,
                bestRating: movieDetailsData.short.aggregateRating.bestRating,
                worstRating: movieDetailsData.short.aggregateRating.worstRating,
                userReviews: movieReviews,
            },
            genre: movieGenres,
            actors: movieActors,
            director: movieDetailsData.short.director[0].name,
            keywords: movieKeyWords,
            productionCompany: movieDetailsData.top.production.edges[0].node.company.companyText
                .text,
            similarMovies: similarMovies,
        };
        return movieDetails;
    }
    async requestMoviesFromAPI(paramKey, query, apiUrl) {
        // this is the general function that will be used to get the movie details
        const options = {
            method: "GET",
            url: `${apiUrl}/?${paramKey}=${query}`,
        };
        try {
            // make the request to the api 
            const response = await axios.request(options);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    // get movie by name API fetcher
    async getMovieByName(movieName) {
        console.log(`Requested Movie Title: ${movieName}`);
        // trim any trailing or leading whitespace from the movie name 
        movieName = movieName.trim();
        let movieList = await this.requestMoviesFromAPI('q', movieName, baseApiUrl);
        // convert into our dto object
        const searchedMovies = movieList.description.map((movie) => {
            return {
                title: movie["#TITLE"],
                year: movie["#YEAR"],
                imdbId: movie["#IMDB_ID"],
                rank: movie["#RANK"],
                actors: movie["#ACTORS"],
                imdbUrl: movie["#IMDB_URL"],
                posterImg: {
                    imgUrl: movie["#IMG_POSTER"],
                    imgWidth: movie["photo_width"],
                    imgHeight: movie["photo_height"],
                },
            };
        });
        return searchedMovies;
    }
    // get movie by Id API fetcher
    async getMovieById(imdbId) {
        imdbId = imdbId.trim();
        console.log(`Requested Movie Id: ${imdbId}`);
        const movieData = await this.requestMoviesFromAPI('tt', imdbId, baseApiUrl);
        const movieDetails = this.convertMovieDetails(movieData);
        return movieDetails;
    }
    // generate random movie API fetcher
    async getTenRandomMovies() {
        const randomTitles = titleGenerator({ exactly: 5, minLength: 5, wordsPerString: 1, });
        console.log(`Requested Random Movie Titles: ${randomTitles}`);
        const movieResults = [];
        for (const title of randomTitles) {
            try {
                const movies = await this.getMovieByName(title);
                const firstMovie = movies[0];
                const lastMovie = movies[movies.length - 1];
                movieResults.push(firstMovie);
                movieResults.push(lastMovie);
                // await delay(1000); // wait 1 second before making the next request
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        }
        return movieResults;
    }
}
// export { MovieDTO, MovieDescriptionDTO } from './types/dtos.type';
export { CineHuntSdk };
