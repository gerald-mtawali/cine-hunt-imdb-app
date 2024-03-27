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

interface styledProps {
	imageUrl: string;
}

export const PosterBackgroundDiv = styled.div<styledProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%; // 100% of the viewport width
	height: 1390px; // 100% of the viewport height
	background-image: url(${(props) => props.imageUrl});
	background-size: cover; // Cover the entire div with the image
	background-position: center; // Center the background image
`;

const TransparentDiv = styled.div`
	background-color: transparent;
	border: 1px solid violet;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
    align-content: flex-end;
	justify-content: flex-end;
    justify-items: flex-end;
	width: 100%;
    height: 80%; 
`;

const ContentContainer = styled.div`
	flex: 1 auto;
	display: flex;
	flex-direction: column;
	background-color: rgba(3, 5, 1, 0.8);
	width: 100%;
	height: 100%;
`;

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
		if (movieTitle && title != "" && detailsStatus === "idle") {
			// only get it if we haven't made the request already
			dispatch(getMovieDetails(imdbId));
		}
	}, [movieTitle, title, detailsStatus, dispatch]);
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
				<PosterBackgroundDiv
					imageUrl={posterImg ? posterImg : NoPosterImage}
				>
					<TransparentDiv>
						<ContentContainer>
							<h1>{movieTitle}</h1>
							<DescriptionBox
								year={movieDetails.year}
								genre={movieDetails.genre}
								type={movieDetails.type}
								description={movieDetails.description}
								aggregateRating={
									movieDetails.review?.aggregateRating
								}
								productionCompany={
									movieDetails.productionCompany
								}
								actors={movieDetails.actors}
								director={movieDetails.director}
							/>
						</ContentContainer>
					</TransparentDiv>
				</PosterBackgroundDiv>
			);
		}
	} else if (detailsStatus === "failed") {
		content = <div>{error}</div>;
	}

	return (
		<>
			<PageDiv>
				<ScrollableDiv>{content}</ScrollableDiv>
			</PageDiv>
		</>
	);
}
