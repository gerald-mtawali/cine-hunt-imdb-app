// import { useState, useEffect } from "react";
// import { getMovieByName } from "../api/movies.ts";

// const getMovieData = async () => {
// 	const movieData = await getMovieByName("flower");
// 	const movieHTML = movieData.map((movie) => {
// 		return (
// 			<div
// 				style={{
// 					display: "flex",
// 					flexDirection: "row",
// 					width: "100%",
// 					height: "200px",
// 					border: "1px solid #ccc",
// 					margin: "8px",
// 				}}
// 			>
// 				{movie.posterImg?.imgUrl && (
// 					<img
// 						src={`${movie.posterImg.imgUrl}`}
// 						style={{
// 							width: "150px",
// 							height: "200px",
// 							objectFit: "cover",
// 						}}
// 					/>
// 				)}

// 				<p>Title: {movie.title}</p>
// 				<p>Release Year: {movie.year}</p>
// 				<p>IMDB ID: {movie.imdbId}</p>
// 				<p> Actors: {movie.actors}</p>
// 			</div>
// 		);
// 	});

// 	return movieHTML;
// };

// export function SearchResults() {
// 	// const movieHTML = await getMovieData();
// 	const [movieHTML, setMovieHTML] = useState<React.ReactNode>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const movieData = await getMovieData();
// 				setMovieHTML(movieData);
// 			} catch (error) {
// 				console.error("Failed to load data");
// 			}
// 		};

// 		fetchData();

// 		// cleanup
// 		return () => {
// 			// cleanup if necessary
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<div
// 				style={{
// 					border: "1px solid #ccc",
// 					margin: "10px",
// 					height: "100vh",
// 				}}
// 			>
// 				<p> Search Result Page</p>
// 				<div>{movieHTML}</div>
// 			</div>
// 		</>
// 	);
// }

import { useEffect } from "react";
import styled from "@emotion/styled";
import { SearchResultCard } from "../components/Search/SearchResultCard";
import { getMovies, clearMovieResults } from "../redux/searchMovieSlice";
import { Spinner } from "../components/common/Spinner";
import { useParams } from "react-router-dom";
import { MovieDTO } from "../api/cinehunt-movies-dtos.types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";

// import { MovieDTO } from "cinehunt-sdk";

const ScrollableDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 500px;
	overflow-y: auto;
	overflow-x: hidden;
	width: 80%;
	margin: 5px;
	background-color: #1a2942;
`;

export function SearchPage() {
	const { movieTitle } = useParams();
	console.log("Path movie title: ", movieTitle);
	const searchResults = useAppSelector(
		(state: RootState) => state.movieResults.movies
	);
	const movieName = useAppSelector(
		(state: RootState) => state.movieResults.name
	);
	const dispatch = useAppDispatch();

	const searchStatus = useAppSelector(
		(state: RootState) => state.movieResults.status
	);
	const error = useAppSelector(
		(state: RootState) => state.movieResults.error
	);

	useEffect(() => {
		if (movieTitle && movieName && movieName !== "") {
			console.log("run api call for finding movies");
            console.log(`Requesting the movie: ${movieName}\nsearch status: ${searchStatus}`)
			// dispatch(getMovies(movieName));
		} else if (movieName === "") {
			dispatch(clearMovieResults());
		}
	}, [movieName, searchStatus, dispatch]);

	let content;
	if (!movieTitle) {
		content = <div> Enter a movie in the search bar... </div>;
	}
	if (movieTitle && searchStatus === "loading") {
		content = <Spinner text="Finding your movies..." />;
	} else if (movieTitle && searchStatus === "succeeded") {
		// content becomes the search results
		if (!searchResults || searchResults.length === 0) {
			content = <div>No Movies Found!</div>;
		} else {
			content = searchResults.map((movieResult: MovieDTO) => {
				return <SearchResultCard movieItem={movieResult} />;
			});
		}
	} else if (searchStatus === "failed") {
		content = <div>{error}</div>;
	}

	return (
		<>
			<ScrollableDiv>
				<h1> Search Page </h1>
				{content}
			</ScrollableDiv>
		</>
	);
}
