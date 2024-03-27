import { MovieDTO } from "cinehunt-sdk";
// import { MovieDTO } from "../../api/cinehunt-movies-dtos.types";
import styled from "@emotion/styled";
import NoPosterImage from "../../assets/image/No-Movie-Icon.png";
import { Link } from "react-router-dom";
import { setImdbId, setTitle } from "../../redux/movieDetailsSlice";
import { useAppDispatch } from "../../redux/hooks";

const CardContainer = styled.div`
	display: flex;
	height: 200px;
	width: 95%;
	padding: 2px;
	margin: 5px;
	background-color: rgba(3, 5, 1, 0.8);
`;

const PosterImage = styled.img`
	height: 100%;
	width: 20%;
	object-fit: contain;
	margin: 2px;
`;

const FilmDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2px !important;
	align-items: flex-start;
	justify-content: flex-start;
	width: 60%;
	p,
	h1,
	h2,
	h3 {
		color: #fff;
		text-align: left;
	}
`;
const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    align-content: center;
    justify-content: flex-end;
    justify-items: center;
    width: 20%;
`;

const MovieButton = styled.button`
    font-family: Inter, sans-serif;;
	background-color: transparent;
	border: none;
	color: #F7FFFF;
	font-size: 15px;
    cursor: pointer;
    text-decoration: underline;
`;
interface SearchPageProps {
	movie: MovieDTO;
}

export const SearchResultCard: React.FC<SearchPageProps> = ({ movie }) => {
    const dispatch = useAppDispatch(); 

	console.log(
		"Rendering the search cards for the movie: \n",
		movie,
		"\n",
		movie.title
	);

    const handleClick = () => {
        // set the movie name and the imbdb id 
        dispatch(setTitle(movie.title));
        dispatch(setImdbId(movie.imdbId));

    }
	return (
		<CardContainer>
			<PosterImage
				src={movie.posterImg ? movie.posterImg?.imgUrl : NoPosterImage}
			/>
			<FilmDetailsContainer>
				<h1 style={{margin: 5 }}>{movie.title}</h1>
				<h3 style={{margin: 3}}>{movie.year}</h3>
				<p style={{margin: 3}}>{movie.actors}</p>
			</FilmDetailsContainer>
			<ButtonContainer>
                
				<Link to={`/film/${movie.title}`} onClick={handleClick}>
					<MovieButton >View {movie.title}</MovieButton>
				</Link>
			</ButtonContainer>
		</CardContainer>
	);
};
