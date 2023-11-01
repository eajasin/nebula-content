import { useState, useEffect } from "react";
import './Popular.css'



export default function Hero() {

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
                console.log(response.results[14])
                setPopularMovie(response.results[14])
            })
            .catch((err) => console.log(err))

    }, [])

    //maybe randomize the display popular movie


    function truncateOverview(string, numOfChars) {
        return string?.length > numOfChars ? string.substring(0, numOfChars - 1) + "..." : string
    }

    return (
        <div className="heroContainer">

            <div className="heroImage" key={popularMovie.id} style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>

                <div className="heroContents">
                    <h1 className="heroTitle">{popularMovie.title}</h1>
                    <div className="heroButtons">


                        <div className="heroOverview">{truncateOverview(popularMovie.overview, 175)}</div>
                        <button className="heroButton">Play</button>
                        <button className="heroButton">More Info</button>

                    </div>
                    {/* <button onClick={() => {
                    console.log(popularMovie, "1")
                   }}>Test</button>   */}
                </div>
                <div className="heroFade" />


                {/* <div> */}
                {/* className="hero" */}
                {/* src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`} */}
                {/* alt="moviePoster" */}
                {/* </div> */}
            </div>




        </div>
    )
}




