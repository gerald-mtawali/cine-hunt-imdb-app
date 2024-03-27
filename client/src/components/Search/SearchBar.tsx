// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import yellowSearchIcon from "../../assets/image/search-icon-yellow.svg";
import { useAppDispatch } from "../../redux/hooks";
import {
	clearMovieName,
	clearMovieResults,
	setMovieName
} from "../../redux/searchMovieSlice";

const SearchContainer = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	border-radius: 4px;
	max-height: 10vh;
	width: 50vw;
	border: 1px solid #e9d05b;
	background-color: rgba(58, 92, 193, 0.3);
	margin-bottom: 20px;
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
	const dispatch = useAppDispatch();
	const [movieInput, setMovieInput] = useState<string>("");
	let navigate = useNavigate();

	const handleInput = (event: {
		target: { value: SetStateAction<string> };
	}) => {
			setMovieInput(event.target.value);
	};

	const setNewName = () => {
		if (movieInput !== "") {
			dispatch(setMovieName(movieInput.trim()));
		} else if (movieInput.trim() === "") {
			dispatch(clearMovieName());
			dispatch(clearMovieResults());
		}
	};

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
				/>
				<SearchLink>
						<SearchIcon src={yellowSearchIcon} onClick={handleLinkPress}/>
				</SearchLink>
			</SearchContainer>
		</>
	);
}
