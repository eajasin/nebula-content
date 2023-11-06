import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import playButton from "./playButton.svg"
import moreInfoSvg from "./moreInfoSVG.svg"
import addToList from "./addToList.svg"
import likeSvg from "./likeSVG.svg"

export default function MovieCard({ movie }) {
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
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />

          </Link>
          <div className="hoveredMovieButtonsContainer">

            <Link to={`/movie/${movie.id}`}>
              <button className="hoveredPlay">
                <img src={playButton}
                  className="playButton"
                  width={25}
                  height={25}
                />
              </button>
             
            </Link>

            <button className="hoveredList">
              <img src={addToList}
                width={25}
                height={25}
              />
               <span className="tooltip">Add to My List</span>
            </button>

            <button className="hoveredLike">
              <img src={likeSvg}
                width={25}
                height={25}
              />
              <span className="tooltip">I Like This</span>
            </button>
           
            
            <button className="hoveredMore" onClick={openModal} >
              <img src={moreInfoSvg}
                width={25}
                height={25}
              />
              <span className="tooltip">More Info</span>
            </button>
            
            {/* <div>{movie.genre}</div> */}


            <div className="hoveredMovieOtherContents">
              <div>{movie.popularity} Popularity</div>
              <div> Vote Average: {movie.vote_average} </div>
              <div>HD</div>


            </div>
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
          <Modal movie={movie} closeModal={closeModal}  />
        </div>
      )}
    </div>
  );

}
