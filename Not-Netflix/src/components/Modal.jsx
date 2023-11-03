import React from "react";

import Hero from "./Hero";


export default function Modal({closeModal, movie}) {
    return (
        <div>
        <Hero />
        <div>
        <div>{movie.Overview}</div>
          <button className="heroButton">Play</button>
          <button className="heroButton">Thumbs Up/Down</button>
          <button className="heroButton">Movie Rating</button>
          <button className="heroButton">Add to List</button>
          <button className="heroButton">Categories</button>
          <button className="heroButton">Number of Seasons</button>
          <div>Cast, Genre</div>
          <button onClick={closeModal}>X</button>
          
          </div>
        </div>
       
        
       
          
         
      
          
        

    )
}