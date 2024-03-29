

import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";




export default function Movies({genreid}) {
    
    const fetchURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreid}`

    const [movies, setMovies] = useState([])
   
    

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTllNDliNDI5YWExMzQwODYwMWMzMWI4NmRlMjQ5MyIsInN1YiI6IjY1MzliMzdhNjc4MjU5MDEzY2QwYjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttg9njOCjKBo2Mig3i4pWmmH_ykYUrt_uESce4FQ1kA'
            }
        };

        fetch(fetchURL, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response.results)
                setMovies(response.results)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="movies">

            {movies.map((movie) => (
                              
            <MovieCard genreid={genreid} movie={movie} />
    
            ))}

        </div>
    )
}



