import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 30vh;
	border: 1px solid #fff;
`;

const DetailsGrid = styled.div`
	display: grid;
	grid-template-columns: 35% 65%;
	grid-auto-rows: 30px;
	row-gap: 10px;
	column-gap: 1px;
	width: 50%;
	border: 1px solid blue;
`;

const GridItemKey = styled.div`
	font-family: "Syne", sans-serif;
	font-weight: bold; // Assuming keys are bold
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
	width: 45%;
	min-height: 100%;
	text-align: left;
	margin: 5px;
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
