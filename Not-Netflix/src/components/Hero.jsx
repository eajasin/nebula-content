import { useState, useEffect } from "react";
import './Popular.css'
import playButton from "./playButton.svg"
import moreInfoButton from "./moreInfoButton.svg"



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
                    <div className="heroOverview">{truncateOverview(popularMovie.overview, 175)}</div>

                    <div className="heroButtons">
                        <button className="heroButtonPlay" >
                            <img src={playButton}
                                className="playButton"
                                width={25}
                                height={25}
                            />
                            <div className="playButtonText">Play</div>
                        </button>

                        <button className="heroButtonMoreInfo">

                            <img src={moreInfoButton}
                                width={25}
                                height={25}
                            />
                            <div className="playButtonText">More Info</div>
                        </button>

                    </div>

                </div>
                <div className="heroFade" />

            </div>




        </div>
    )
}




