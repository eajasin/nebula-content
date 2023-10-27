import { useEffect } from "react";


export default function MovieGenres(setGenres) {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWUyNDY5OGRkMjNmNDIzYTUwOTI2YmNkYmQ2N2I0ZiIsInN1YiI6IjYzZjZkMDFiNDZmMzU0MDA5ZDFhMzc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ii4vaRZwszkbQ9FymA81emEfiqT_v_ItUAE0A6ndNCw"
      }
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.genres);
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  }, []);
}