import React from "react";
import { useLoaderData } from "react-router-dom";
export async function loader({ params }) {
  console.log(params.id)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTllNDliNDI5YWExMzQwODYwMWMzMWI4NmRlMjQ5MyIsInN1YiI6IjY1MzliMzdhNjc4MjU5MDEzY2QwYjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttg9njOCjKBo2Mig3i4pWmmH_ykYUrt_uESce4FQ1kA'
    }
  };


  let movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      return response
    })
    .catch(err => console.error(err));


  let movieTrailer = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      return response.results[0].key
    })
    .catch(err => console.error(err));

  return { movie, movieTrailer }




}

export default function MoviePage() {
  const { movie, movieTrailer } = useLoaderData()

  return (
    <div className="moviePageContents">
      <div className="trailerTitle">{movie.title}</div>
      <iframe
        className="youtubeTrailer"
        src={`https://www.youtube.com/embed/${movieTrailer}`}
      ></iframe>
    </div>
  )
}