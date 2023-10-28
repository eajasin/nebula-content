import React from "react";
import MovieGenres from "./MovieGenres.jsx";
import Hero from "./Hero.jsx";

function Home({genre}) {

        return (
            <div>
                <Hero />
                <MovieGenres genre={genre} />
            </div>
        )
    }

export default Home