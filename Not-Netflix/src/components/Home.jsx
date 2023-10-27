import React from "react";
import GenreRows from "./MovieGenres";


function Home() {
  return (
    <>
        <main>
            <section className="heroContainer">
            <GenreRows />
            
            </section>
            <section className="moviesContainer">Movies List</section>
        </main>
        {/* <footer>Social Media, Links, etc.</footer> */}
       
    </>
  )
}

export default Home