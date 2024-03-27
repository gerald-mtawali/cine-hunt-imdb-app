import { useEffect } from "react";
import styled from "@emotion/styled";
import { SearchResultCard } from "../components/Search/SearchResultCard";
import {
	getMovies,
	clearMovieResults,
	setStatus,
} from "../redux/searchMovieSlice";
import { Spinner } from "../components/common/Spinner";
import { useParams } from "react-router-dom";
// import { MovieDTO } from "../api/cinehunt-movies-dtos.types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { MovieDTO } from "cinehunt-sdk";
import { PageDiv, ScrollableDiv } from "../components/common/CommonStyledComponents";

const ContentContainer = styled.div`
    flex: column; 
    align-items: center; 
    align-content: center;
    justify-content: center;
    justify-items: center;
    width: 80%; 
    /* border: 1px solid lime;  */
`;

export function SearchPage() {
	const { movieTitle } = useParams();
	// console.log("Path movie title: ", movieTitle);
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
		if (movieTitle && movieName !== "") {
			console.log("run api call for finding movies");
			console.log(
				`Requesting the movie: ${movieName}\nsearch status: ${searchStatus}`
			);
			dispatch(getMovies(movieName));
		} else if (movieName === "") {
			dispatch(clearMovieResults());
			dispatch(setStatus("idle"));
		}
	}, [movieName, dispatch]);

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
			// set the status to idle once we've extracted the search results data
			dispatch(setStatus("idle"));
		} else {
			content = searchResults.map((movieResult: MovieDTO) => {
				return <SearchResultCard movie={movieResult} />;
			});
		}
	} else if (searchStatus === "failed") {
		content = <div>{error}</div>;
	}

	return (
		<>
			<PageDiv>
                <h1> Search Page </h1>
				<ScrollableDiv>
                    <ContentContainer>
                        {content}
                    </ContentContainer>
				</ScrollableDiv>
			</PageDiv>
		</>
	);
}
