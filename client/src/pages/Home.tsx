import { getTenRandomMovies } from "../api/movies"; 
import React from "react";
import { MovieDTO } from "../api/cinehunt-movies-dtos.types";

const homeHtml = (movielist: MovieDTO[]): React.ReactNode => {
    const myHtml = movielist.map((movie)=> {
        return(
            <div>
                <h2>{movie.title}</h2>
                <p> {movie.year} </p>
            </div>
        ); 
    })

    return myHtml; 
}
export function Home(){
    const [randomMovies, setRandomMovies] = React.useState<any>([]); 
    const [moviesHTML, setMoviesHTML] = React.useState<React.ReactNode>(null); 

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getTenRandomMovies();
                setRandomMovies(response);
                console.log('List of random movies: \n', randomMovies);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        fetchData(); 
        setMoviesHTML(homeHtml(randomMovies)); 
        // cleanup 
        return () => {
            // cleanup if necessary
        }

    }, []); 


    return(
        <div>
            <h1>HomePage</h1>
            <div> 
                {moviesHTML}
            </div>
        </div>
    ) 
}