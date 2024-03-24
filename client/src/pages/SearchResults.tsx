import { useState, useEffect } from "react";
import { getMovieByName } from "../api/movies.ts";

const getMovieData = async () => {
	const movieData = await getMovieByName("flower");
	const movieHTML = movieData.map((movie) => {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					height: "200px",
					border: "1px solid #ccc",
					margin: "8px",
				}}
			>
				{movie.posterImg?.imgUrl && (
					<img
						src={`${movie.posterImg.imgUrl}`}
						style={{
							width: "150px",
							height: "200px",
							objectFit: "cover",
						}}
					/>
				)}

				<p>Title: {movie.title}</p>
				<p>Release Year: {movie.year}</p>
				<p>IMDB ID: {movie.imdbId}</p>
				<p> Actors: {movie.actors}</p>
			</div>
		);
	});

	return movieHTML;
};

export function SearchResults() {
	// const movieHTML = await getMovieData();
	const [movieHTML, setMovieHTML] = useState<React.ReactNode>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const movieData = await getMovieData();
				setMovieHTML(movieData);
			} catch (error) {
				console.error("Failed to load data");
			}
		};

		fetchData();

		// cleanup
		return () => {
			// cleanup if necessary
		};
	}, []);

	return (
		<>
			<div
				style={{
					border: "1px solid #ccc",
					margin: "10px",
					height: "100vh",
				}}
			>
				<p> Search Result Page</p>
				<div>{movieHTML}</div>
			</div>
		</>
	);
}
