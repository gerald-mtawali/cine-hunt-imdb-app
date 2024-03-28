import React, {useEffect} from "react";
import { MovieDTO } from "cinehunt-sdk";
import { PageDiv, ScrollableDiv } from "../components/common/CommonStyledComponents";
import { MovieCard } from "../components/Home/MovieCard";
// import DummyData from '../data/movieSearch.json'; 
import { getRandomMovies } from "../redux/randomMoviesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Spinner } from "../components/common/Spinner";
import { RootState } from "../redux/store";
import styled from "@emotion/styled";

const HomeGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
    /* grid-gap: 10px; */
    column-gap: 5px;
    row-gap: 5ch;
    max-width: 100%; 
    margin: 10px;
`; 

export function HomePage() {
    const dispatch = useAppDispatch(); 
    // const dummyMovies:MovieDTO[] = DummyData; 

    const movies:MovieDTO[] = useAppSelector( (state: RootState) => state.randomMovies.movies);
    const randomRequestStatus = useAppSelector( (state: RootState) => state.randomMovies.status);
    const randomRequestError = useAppSelector( (state: RootState) => state.randomMovies.error);

    useEffect(() => {
        if (randomRequestStatus === 'idle') {
            dispatch(getRandomMovies())
        }

    }, [movies, dispatch]); 

    let content; 

    if (randomRequestStatus === 'loading') {
        content = <Spinner text="Fetching Films for you..." />
    } else if (randomRequestStatus === 'succeeded') {

        content = (<HomeGridContainer>
            {movies.map((movie, index) => (
            <React.Fragment key={index}>
                <MovieCard movie={movie} />
            </React.Fragment>
            ))}
        </HomeGridContainer>)
    } else if (randomRequestStatus === 'failed') {
        content = <div>{randomRequestError}</div>
    }   
    
	return (
		<>
			<PageDiv>
                <h1>Highlighted Movies</h1>
                <ScrollableDiv> 
                    {content}
                </ScrollableDiv> 
			</PageDiv>
		</>
	);
}
