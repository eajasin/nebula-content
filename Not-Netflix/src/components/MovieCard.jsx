import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function MovieCard({ genreid, movie }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <div
      key={movie.id}
      className="movieContainer"
      onMouseEnter={() => setHoveredMovie(movie)}
      onMouseLeave={() => setHoveredMovie(null)}
    >

      {hoveredMovie === movie ? (
        <div className="hoveredMovieContents">
         <Link to={`/movie/${movie.id}`}> 
            <img
            className="hoveredMovie"
            alt="moviePoster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
       </Link>
          
          <div>
         
          <button className="heroButton">Play</button>
          <button className="heroButton" onClick={openModal}>More Info</button> 
        
          <button className="heroButton">Add to List</button>
          <button className="heroButton">Thumbs Up/Down</button>
          <button className="heroButton">Movie Rating</button>
          <button className="heroButton">Categories</button>
          <button className="heroButton">Number of Seasons</button>
       </div>
          {/* </div> */}
        </div>
      ) : (
        <div
      key={movie.id}
      className="movieContainer">
        <div className="movieContents">

          <img
            className="movie"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="moviePoster"
          />
        </div>
        </div>
      )}

        {isModalOpen && (
          <Modal movie={movie} closeModal={closeModal} />
        )}
    </div>


  );
}
