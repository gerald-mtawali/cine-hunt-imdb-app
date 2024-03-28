import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Spinner } from "../components/common/Spinner";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { MovieDescriptionDTO } from "cinehunt-sdk";
import { getMovieDetails } from "../redux/movieDetailsSlice";
import styled from "@emotion/styled";
import {
	PageDiv,
	ScrollableDiv,
} from "../components/common/CommonStyledComponents";
import { DescriptionBox } from "../components/Film/FilmDetails";
import NoPosterImage from "../assets/image/No-Movie-Icon.png";
import React from "react";

/*
	This last file is hastily thrown together. With a little more time I would create TWO additional components. 
	One for the User Reviews and one for the keywords. I would heavily alter the styling as well to match the designs 
	of the application. I would have added an additional component to provide the images of the actors. And another 
	component to provide similar movies to the selected movie.

*/
interface styledProps {
	imageUrl: string;
}

export const PosterBackgroundDiv = styled.div<styledProps>`
	display: flex;
	flex-direction: column;
	width: 40%;
	height: 60%;
	background-image: url(${(props) => props.imageUrl});
	background-size: contain;
	background-repeat: no-repeat;
	margin: 3% 5%;
`;

const PosterDetailsDiv = styled.div`
	width: 90%;
	height: 50vh;
	display: flex;
	flex-direction: row;
`;

const KeyWordFragment = (keywords: string[]): React.ReactNode => {
	return (
		<React.Fragment>
			{keywords.map((word, index) => (
				<p key={index}>{word}</p>
			))}
		</React.Fragment>
	);
};

export function FilmDetailsPage() {
	const { movieTitle } = useParams();
	const dispatch = useAppDispatch();

	const imdbId = useAppSelector(
		(state: RootState) => state.movieDetails.imdbId
	);
	const movieDetails = useAppSelector(
		(state: RootState) => state.movieDetails.movieDetails
	);
	const title = useAppSelector(
		(state: RootState) => state.movieDetails.title
	);
	const error = useAppSelector(
		(state: RootState) => state.movieDetails.error
	);
	const detailsStatus = useAppSelector(
		(state: RootState) => state.movieDetails.status
	);

	useEffect(() => {
		if (movieTitle && title != "") {
			// only get it if we haven't made the request already
			dispatch(getMovieDetails(imdbId));
		}
	}, [movieTitle, title, dispatch]);
	let content;

	if (!movieTitle) {
		content = <div> Enter a movie in the search bar... </div>;
	} else if (movieTitle && detailsStatus === "loading") {
		content = <Spinner text={`Loading Details for ${title} ...`} />;
	} else if (detailsStatus === "succeeded") {
		if (movieDetails) {
			// get the imageUrl
			const { posterImg } = movieDetails;

			content = (
				<ScrollableDiv>
					<PosterDetailsDiv>
						<PosterBackgroundDiv
							imageUrl={posterImg ? posterImg : NoPosterImage}
						/>
						<DescriptionBox
							year={movieDetails.year}
							genre={movieDetails.genre}
							type={movieDetails.type}
							description={movieDetails.description}
							aggregateRating={
								movieDetails.review?.aggregateRating
							}
							productionCompany={movieDetails.productionCompany}
							actors={movieDetails.actors}
							director={movieDetails.director}
						/>
					</PosterDetailsDiv>
					<div>
						<h1> User Reviews </h1>
					</div>
					<div>
						<h1> Key Words </h1>
						{movieDetails.keywords.length > 0 ? (
							KeyWordFragment(movieDetails.keywords)
						) : (
							<p>No key words</p>
						)}
					</div>
				</ScrollableDiv>
			);
		}
	} else if (detailsStatus === "failed") {
		content = <div>{error}</div>;
	}

	return (
		<>
			<PageDiv>
				<h1>{movieTitle}</h1>
				{content}
			</PageDiv>
		</>
	);
}
