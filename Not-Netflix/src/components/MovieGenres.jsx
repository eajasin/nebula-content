
import { useState, useEffect } from "react";
import Movies from "./Movies.jsx";
import './Movies.css'


const fetchURL = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

export default function MovieGenres(){

const [genre, setGenre] = useState([])

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
            console.log(response.genres)
            setGenre(response.genres)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
    <div>
        <div className="movieBlock">
            {genre.map((movieGenre) => (
                <div  key={movieGenre.id}>
                    <div className="genreName">{movieGenre.name}</div>
                    
                    <div className="movies">  
                    <Movies genreid={movieGenre.id} /> 
                    </div>
                  
                </div>
            ))}
        </div>
    </div>
    
    )

  }

 