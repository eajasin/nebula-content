import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import playButton from "./playButton.svg"
import moreInfoSvg from "./moreInfoSVG.svg"
import addToList from "./addToList.svg"
import likeSvg from "./likeSVG.svg"

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
      className="parentMovieContainer"
      key={movie.id}
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
          <div className="hoveredMovieButtons">

          <Link to={`/movie/${movie.id}`}>  
            <button className="hoveredPlay">
              <img src={playButton}
                className="playButton"
                width={25}
                height={25}
              />
            </button>
          </Link> 
          
            <button className="">
              <img src={addToList}
              width={25}
              height={25}
              />
              </button>
            <button className="">
            <img src={likeSvg}
              width={25}
              height={25}
              />
             </button>
             <button className="" onClick={openModal}>
              <img src={moreInfoSvg}
              width={25}
              height={25}
              />
              </button>
            {/* <div>{movie.genre}</div> */}
          </div>
        </div>
      ) : (
        <div key={movie.id} className="movieContainer">

          <Link to={`/movie/${movie.id}`}>
            <img
              className="movie"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="moviePoster"
            />
          </Link>

        </div>
      )}
      {isModalOpen && (
        <div className="modalUnderlay">
          <Modal movie={movie} closeModal={closeModal} />
        </div>
      )}
    </div>
  );

}
