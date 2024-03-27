import React from "react";
import { Link } from "react-router-dom";
import { setImdbId, setTitle } from "../../redux/movieDetailsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { MovieDTO } from "cinehunt-sdk";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NoPosterImage from "../../assets/image/No-Movie-Icon.png";

interface CardProps {
	movie: MovieDTO;
}

const CardContanier = styled.div`
	display: flex;
	flex-direction: column;
	height: 350px;
	width: 220px;
	background-color: #030501;
	align-items: center;
	align-content: center;
    justify-content: center;

    &:hover {
        box-shadow: rgba(233, 208, 91, 0.75) 0px 5px 15px;
    }

`;

const PosterImage = styled.img`
	height: 85%;
	width: 100%;
	object-fit: cover;
	/* margin: 0px 0px 2px 0px; */
`;

const TitleText = styled.div`
    flex: 1 auto;
	color: #f7ffff;
    display: flex; 
    align-items: center;
    justify-content: center;
	font-size: 12px;
	text-align: center;
	word-wrap: break-word;
	margin: auto;
	cursor: pointer;
`;

const TitleLink = styled(Link)`
	font-family: "Syne", sans-serif !important;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	font-family: inherit;
	font-size: 15px;
    font-weight: 500;
`;

export const MovieCard: React.FC<CardProps> = ({ movie }) => {
	const dispatch = useAppDispatch();
	const handleClick = () => {
		// set the movie name and the imbdb id
		dispatch(setTitle(movie.title));
		dispatch(setImdbId(movie.imdbId));
	};
	return (
		<>
			<CardContanier>
				<PosterImage
					src={
						movie.posterImg?.imgUrl
							? movie.posterImg.imgUrl
							: NoPosterImage
					}
				/>
				<TitleText onClick={handleClick}>
					<TitleLink to={`/film/${movie.title}`}>
						{movie.title}
					</TitleLink>
				</TitleText>
			</CardContanier>
		</>
	);
};
