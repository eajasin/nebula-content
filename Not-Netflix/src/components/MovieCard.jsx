import React, { useState } from "react";

export default function MovieCard({ genreid, movie }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

 

  return (

    <div
      key={movie.id}
      className="movieContainer"
      onMouseEnter={() => setHoveredMovie(movie)}
      onMouseLeave={() => setHoveredMovie(null)}
    >

      {hoveredMovie === movie ? (
        <div className="hoveredMovieContents">
          <img
            className="hoveredMovie"
            alt="moviePoster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
          <div className="hoverOverview">
          <p>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <div className="movieContents">

          <img
            className="movie"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="moviePoster"
          />
        </div>
      )


      }

    </div>


  );
}
