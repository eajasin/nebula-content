import { useState } from 'react'

import './App.css'
import MovieGenres from './components/MovieGenres';
import MovieRow from './components/MovieRow';

function App() {
  const [genres, setGenres] = useState([]);

  MovieGenres(setGenres)

  return (
    <>
     <div className="App">
      {genres.map((genre) => {
        return (
          <MovieRow key={genre.id} genreid={genre.id} genre={genre.name} />
        );
      })}
    </div>
    </>
  )
}

export default App
