import { useState, useEffect } from "react";
import './Popular.css'



export default function Popular(){
    
    const fetchURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'


    const [popMovies, setPopMovies] = useState([])

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
                setPopMovies(response.results)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="popMovies">

            {popMovies.map((popularMovie) => (
                <div key={popularMovie.id}>
                                        <img
                    className="movie"
                        width="200px"
                        height="200px"
                        src={`https://image.tmdb.org/t/p/original/${popularMovie.poster_path}`}
                        alt="moviePoster"
                    />
                     
                </div>
            ))}
            
        </div>
    )
}




