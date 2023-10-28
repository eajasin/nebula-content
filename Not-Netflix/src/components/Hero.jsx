
import './Hero.css'
// import { useState, useEffect } from "react";
// import Movies from './components/Movies.jsx';


export default function Hero({movies}){

    //const fetchURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreid}`

    // const [backdrop, setBackdrop] = useState([])
    // const [movieOverview, setMovieOverview] = useState([])

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTllNDliNDI5YWExMzQwODYwMWMzMWI4NmRlMjQ5MyIsInN1YiI6IjY1MzliMzdhNjc4MjU5MDEzY2QwYjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttg9njOCjKBo2Mig3i4pWmmH_ykYUrt_uESce4FQ1kA'
    //         }
    //     };

    //     fetch(fetchURL, options)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response.results)
    //             setBackdrop(response.results)
    //         })
    //         .catch((err) => console.log(err))

    // }, [])

   
    return (
        <div className="hero">
           
            <div>{movies.title}</div>
            {/* <img className="movieBackdrop" src={`https://image.tmdb.org/t/p/original/backdrop_path}`} /> */}
            <div className="movieOverview">Overview Text</div>
            <button>
                <img />
                Play</button>
            <div>More Info</div>
            <div>Movie Rating</div>
            {/* this will have the image, button to movie, overview */}
        </div>
    )
}