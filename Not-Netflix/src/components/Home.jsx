import React from "react";
import MovieGenres from "./MovieGenres.jsx";
import Popular from './Popular.jsx'
import Hero from './Hero.jsx'



function Home({genre, popMovies}) {

   
        return (
            <div>
               <Hero />
                <MovieGenres genre={genre} />
                
            </div>
        )
    }

export default Home