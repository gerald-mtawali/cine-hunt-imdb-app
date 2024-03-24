// stores all of the types and interfaces required for the Cinehunt-Api SDK

// Movie DTO Shapes 
interface MoviePosterImage {
    imgUrl?: string;
    imgWidth?: number;
    imgHeight?: number; 
}

export interface MovieDTO {
	title: string;
	year: number;
	imdbId: string;
	rank: number;
	actors: string;
	imdbUrl: string;
	posterImg: MoviePosterImage | null;
}

// Movie Description DTO Shapes
interface UserReviews {
    author: string;
    reviewSummary: string;
    reviewBody: string;
    reviewRating: number;
    reviewDate: string;
}

interface SimilarMovies {
    title: string;
    imdbId: string;
    posterImg: string;
}

export interface MovieDescriptionDTO {
	imdbId: string;
	title: string;
	posterImg: string;
	description: string;
	type: string;
	year: number;
	review: {
		aggregateRating: number;
		reviewCount: number;
		bestRating: number;
		worstRating: number;
		userReviews: UserReviews[] | [];
	} | null;
	genre: string[] | [];
	actors: string[] | [];
	director: string;
	keywords: string[] | [];
	productionCompany: string;
	similarMovies: SimilarMovies[] | [];
	synopsis: string;
}

// IMDb Bot Response Shapes 
// interface MovieDescription {
//     "#TITLE": string; 
//     "#YEAR": number;
//     "#IMDB_ID": string; 
//     "#RANK": number;
//     "#ACTORS": string;
//     "#AKA": string; 
//     "#IMDB_URL": string;
//     "#IMDB_IV": string; 
//     "#IMG_POSTER": string;
//     "photo_width": number;
//     "photo_height": number;

// }

// export interface MovieSearchResponse{
//     ok: boolean; 
//     description: MovieDescription[] | []; 
//     error_code: number;
// }

