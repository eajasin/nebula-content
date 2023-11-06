import React from "react";
import ModalMovieCard from "./ModalMovieCard.jsx";


export default function Modal({closeModal, movie }) {
  return (
    <div className="modalUnderlay">

<ModalMovieCard closeModal={closeModal}movie={movie} />









</div>

  )
}