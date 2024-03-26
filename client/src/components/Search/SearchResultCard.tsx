// import { MovieDTO } from "cinehunt-sdk";
// import { MovieDTO } from "../../api/cinehunt-movies-dtos.types";
import styled from "@emotion/styled";
import NoPosterImage from "../../assets/image/No-Movie-Icon.png";

const CardContainer = styled.div`
	display: flex;
	height: 200px;
	width: 80%;
	padding: 2px;
	margin: 5px;
	background-color: rgba(3, 5, 1, 0.8);
`;

const PosterImage = styled.img`
	height: 90%;
	width: 100px;
	object-fit: cover;
	margin: 2px;
`;

const FilmDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2px;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid red;
	width: 100%;
	p,
	h1,
	h2,
	h3 {
		color: #fff;
		text-align: left;
	}
`;

export function SearchResultCard(movieItem: any) {
	console.log(
		"Rendering the search cards for the movie: \n",
		movieItem,
		"\n",
		movieItem.movieItem.title
	);
	const movie = movieItem.movieItem;
	// use this to build the card for the search results
	return (
		<CardContainer>
			<PosterImage
				src={movie.posterImg ? movie.posterImg?.imgUrl : NoPosterImage}
			/>
			<FilmDetailsContainer>
				<h2>{movie.title}</h2>
				<h3>{movie.year}</h3>
				<p>{movie.actors}</p>
			</FilmDetailsContainer>
		</CardContainer>
	);
}
