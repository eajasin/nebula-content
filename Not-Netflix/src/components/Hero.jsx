import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                setPopularMovie(response.results[13])
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
                
            }}>

                <div className="heroContents">

                    <div className="heroTitle">{popularMovie.title}</div>
                    <div className="heroOverview">{truncateOverview(popularMovie.overview, 122)}</div>

                    <div className="heroButtonsContainer">

                        {/* <Link to={`/movie/${movie.id}`}> */}
                            <button className="heroButtonPlay" >
                                <img src={playButton}
                                    className="playButton"
                                    width={25}
                                    height={25}
                                />

                                <div className="playButtonText">Play</div>
                            </button>
                        {/* </Link> */}

                        <button className="heroButtonMoreInfo" >
                        {/* onclick={openModal} */}

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




