import React from "react";

function MovieCard({movie}){
    return (
        <>
         <div>
        <h1>{movie.title}</h1>
        {/* movie trailer, not backdrop? */}
        <img
          style={{ heigth: "200px", width: "400px" }}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="movie-pic"
        />
        {/* this will have the backdrop, image, button to movie, overview */}
        {/* movie title, overview, rating, play button */}

      </div>
        </>
    )
}

export default MovieCard
