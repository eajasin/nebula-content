import { useState, useEffect } from "react";
import './Popular.css'



export default function Hero(){
    
    const fetchURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'


    const [popularMovie, setPopularMovie] = useState([])

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
                console.log(response.results[15])
                setPopularMovie(response.results[15])
            })
            .catch((err) => console.log(err))

    }, [])

//maybe randomize the display popular movie
    

    return (
        <div className="heroContainer">
     
                <div key={popularMovie.id}>
                    <img
                        className="hero"
                        src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
                        alt="moviePoster"
                    />
            <div className="heroStuff">
                <div>{popularMovie.title}</div>  
                <div>{popularMovie.overview}</div>
                <button>Play</button>
                <button>More Info</button>
                   {/* <button onClick={() => {
                    console.log(popularMovie, "1")
                   }}>Test</button>   */}
                </div>
            </div>
            
            
        </div>
    )
}




