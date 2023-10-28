import React from "react";
import MovieGenres from "./MovieGenres.jsx";

function Home({genre}) {

        return (
            <div>
                
                <MovieGenres genre={genre} />
            </div>
        )
    }

export default Home