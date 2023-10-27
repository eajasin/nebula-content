import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieGenres from "./MovieGenres";
export default function MovieRow({ genreid, genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWUyNDY5OGRkMjNmNDIzYTUwOTI2YmNkYmQ2N2I0ZiIsInN1YiI6IjYzZjZkMDFiNDZmMzU0MDA5ZDFhMzc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ii4vaRZwszkbQ9FymA81emEfiqT_v_ItUAE0A6ndNCw"
      }
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreid}`, // <-- es6 template literal for dynamically inserting genreid based upon props
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // <--- change this .then to have this function:
        console.log(response.results);
        setMovies(response.results); // setMovies (response.results is an array of movies)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>{genre}</h1>
      <div className="movieRow">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}
