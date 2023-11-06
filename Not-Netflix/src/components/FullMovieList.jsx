import { useState, useEffect } from "react";
import MovieGenres from "./MovieGenres";

import "./Popular.css"

export default function FullMovieList(){
     
    const fetchURL = 'https://api.themoviedb.org/3/search/movie?query=co&include_adult=false&language=en-US&page=1'


    const [allMovies, setAllMovies] = useState([])

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
                setAllMovies(response.results)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="fullMovies">

            {allMovies.map((allMovie) => (
                <div key={allMovie.id}>
                   
                                        <img
                    className="movie"
                        width="200px"
                        height="200px"
                        src={`https://image.tmdb.org/t/p/original/${allMovie.poster_path}`}
                        alt="moviePoster"
                    />
              
                </div>
            ))}
            
        </div>
    )

}

