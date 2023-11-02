import React from "react";
import { useLoaderData } from "react-router-dom";
export async function loader(){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTllNDliNDI5YWExMzQwODYwMWMzMWI4NmRlMjQ5MyIsInN1YiI6IjY1MzliMzdhNjc4MjU5MDEzY2QwYjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttg9njOCjKBo2Mig3i4pWmmH_ykYUrt_uESce4FQ1kA'
        }
      };
      
  
      return fetch('https://api.themoviedb.org/3/movie/575264?language=en-US', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
        .catch(err => console.error(err));
   
}

export default function MoviePage(){
    const movie = useLoaderData()
      
   
    
   
   
    return (
    <div>
     {movie.title}
       
    </div>
    )
}