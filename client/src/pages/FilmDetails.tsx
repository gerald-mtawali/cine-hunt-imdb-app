import React from "react";
import { useState, useEffect } from "react";
import { getMovieById } from "../api/movies"; 
import { MovieDescriptionDTO } from "../api/cinehunt-movies-dtos.types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// export function FilmDescription(){
//     const [movieInfo, setMovieInfo] = useState<any>({}); 

//     // const movieInfo = 

//     useEffect(()=> {
//         const fetchData = async () => {
//             try {
//                 const movieData: MovieDescriptionDTO = await getMovieById('tt6723592'); 
//                 setMovieInfo(movieData);
//                 console.log(movieData);
//             } catch (error){
//                 console.error("Failed to load data")
//             }
//         }
//         fetchData(); 
//         // cleanup 
//         return () => {
//             // cleanup if necessary
//         }

//     }, [])

//     return (
//         <div>
//             <h1>Film Description</h1>
//             <h2> Title: {movieInfo.title} </h2>
//             <div> 
//                 <p> ImdbId: {movieInfo.imdbId} </p>
//                 <p> Year: {movieInfo.year} </p>
//                 <p> Type: {movieInfo.type} </p>
//                 <p> Genre: {movieInfo.genre} </p>
//             </div>
//         </div>
//     )
// }

export function FilmDetailsPage(){
    // const filmImdbId = match.params.imbdId; 
    const filmImdbId = useParams().imdbId;

    

    return (
        <div>
            <h1>Film Description</h1>
        </div>
    )
}