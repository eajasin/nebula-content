import React from "react"

import { Link } from "react-router-dom";
import playButton from "./playButton.svg"

import addToList from "./addToList.svg"
import likeSvg from "./likeSVG.svg"
import MovieCard from "./MovieCard";

export default function ModalMovieCard({ closeModal, movie }) {

  return (
    <div className="modal">
      <div className="modalMovie" key={movie.id} >
        <button className="closeButton" onClick={closeModal}>X</button>
        <Link to={`/movie/${movie.id}`}>

          <img
            className="modalMovie"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="moviePoster"

          />
        </Link>
       

        <div className="modalContents">

          <div className="modalButtonsContainer">

            <Link to={`/movie/${movie.id}`}>
              <button className="modalPlay" >
                <img src={playButton}

                  width={40}
                  height={25}
                />
                <div className="modalPlayText">Play</div>
              </button>
            </Link>

            <button className="modalList">
              <img src={addToList}
                width={25}
                height={25}
              />
              <span className="tooltip">Add to My List</span>
            </button>

            <button className="modalLike">
              <img src={likeSvg}
                width={25}
                height={25}
              />
              <span className="tooltip">I Like This</span>
            </button>
          </div>
          {/* <button className="heroButton">Categories</button>
          <button className="heroButton">Number of Seasons</button> */}

        </div>

        <div className="modalOtherContents">
          <div className="movieInfo">
          <div>{movie.popularity} Popularity</div>
          <div> Vote Average: {movie.vote_average} </div>
          <div>Release Date: {movie.release_date}</div>
          <div>HD</div>
          </div>
          <div className="modalOverview">{movie.overview}</div>
        
        </div>

      </div>
    </div>

  )
}