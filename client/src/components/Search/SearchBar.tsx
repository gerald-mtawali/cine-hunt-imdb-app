// import { jsx, css } from "@emotion/react";
import { SetStateAction, useState, useEffect } from "react";
import styled from "@emotion/styled";
import yellowSearchIcon from "../../assets/image/search-icon-yellow.svg";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
	selectMovieName,
	setMovieName,
	clearMovieName,
	clearMovieResults,
} from "../../redux/searchMovieSlice";
import { Link, useNavigate } from "react-router-dom";

const SearchContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	align-content: center;
	border-radius: 4px;
	height: 30px;
	width: 70%;
	border: 1px solid #e9d05b;
	background-color: rgba(58, 92, 193, 0.3);
`;

const SearchIcon = styled.img`
	min-width: 20px;
	max-height: 30px;
	margin: 1px;
	cursor: pointer;
	text-align: center;
`;

const SearchInput = styled.input`
	margin: 2px 5px;
	border: none;
	outline: none;
	width: 80%;
	background-color: transparent;
	&::placeholder {
		color: #f7ffff;
	}
`;

const SearchLink = styled.div`
	display: flex;
	/* border: 2px solid green; */
	align-items: center;
	justify-content: center;
	align-content: center;
	margin: 2px 3px;
`;

export function SearchBar() {
	const movieName = useAppSelector(selectMovieName);
	const dispatch = useAppDispatch();
	const [movieInput, setMovieInput] = useState<string>("");
	let navigate = useNavigate();

	const handleInput = (event: {
		target: { value: SetStateAction<string> };
	}) => {
			setMovieInput(event.target.value);
			console.log(movieInput)	
	};

	const setNewName = () => {
		if (movieInput !== "") {
			dispatch(setMovieName(movieInput.trim()));
		} else if (movieInput.trim() === "") {
			dispatch(clearMovieName());
			dispatch(clearMovieResults());
		}
	};

	// useEffect(() => {
	// 	console.log("Updated Movie Name: ", movieName);
	// 	// navigate(`/search/${movieName}`);
	// }, [movieName, navigate]);

	const handleLinkPress = () => {
		setNewName(); 
		navigate(`/search/${movieInput.trim()}`);
	}

	return (
		<>
			<SearchContainer>
				<SearchInput
					placeholder="Search for your favorite movies here..."
					value={movieInput}
					autoComplete=""
					type="text"
					onChange={handleInput}
					spellCheck="false"
					// onKeyDown={(e) => {
					// 	if (e.key === "Enter") {
					// 		setNewName();
					// 	}
					// }}
				/>
				<SearchLink>
						<SearchIcon src={yellowSearchIcon} onClick={handleLinkPress}/>
				</SearchLink>
			</SearchContainer>
		</>
	);
}
