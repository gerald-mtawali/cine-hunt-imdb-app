import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 50vh;
`;

const DetailsGrid = styled.div`
	display: grid;
	grid-template-columns: 35% 65%;
	row-gap: 3%;
	column-gap: 1px;
	width: 100%;
	height: 30vh;
	margin: 0px 0px 10px 0px;
`;

const GridItemKey = styled.div`
	font-family: "Syne", sans-serif;
	font-weight: bold;
	word-wrap: break-word;
	text-align: left;
`;
const GridItemValue = styled.div`
	font-family: "Inter", sans-serif;
	text-align: left;
	word-wrap: break-word;
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: flex-start;
	justify-items: flex-start;
	width: 100%;
	min-height: 80%;
	text-align: left;
	margin: 5px;
	padding: 0px;

	.h3 {
		margin: 2px 1px 2px 0px; 
		margin-block-start: 0%;
		margin-block-end: 0%;
	}
	.p {
		margin: 0px;
	}
`;

interface MovieDescriptionProps {
	year: number;
	genre: string[] | [];
	type: string;
	description: string;
	aggregateRating?: number;
	director: string;
	actors: string[] | [];
	productionCompany: string;
}

export const DescriptionBox: React.FC<MovieDescriptionProps> = ({
	year,
	genre,
	type,
	description,
	aggregateRating,
	productionCompany,
	actors,
	director,
}) => {
	const gridData = [
		["Year", year],
		["Genre", genre],
		["Type", type],
		["Aggregate Rating", aggregateRating ? `${aggregateRating}/10` : `NA`],
		["Production Company", productionCompany],
		["Actors", actors.toString()],
		["Director", director],
	];
	return (
		<>
			<Container>
				<DetailsGrid>
					{gridData.map(([key, val], index) => (
						<React.Fragment key={index}>
							<GridItemKey> {key} </GridItemKey>
							<GridItemValue>{val} </GridItemValue>
						</React.Fragment>
					))}
				</DetailsGrid>
				<DescriptionContainer>
					<h3> Description </h3>
					<p>{description}</p>
				</DescriptionContainer>
			</Container>
		</>
	);
};
