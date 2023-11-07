import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FullMovieList from './components/FullMovieList';
import Popular from './components/Popular';
import MoviePage, {loader as movieLoader} from './components/MoviePage';
import NotFound from './components/NotFound';
import "./index.css"
import "./reset.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [    
      { index: true, element: <Home /> },
      { path: "movies", element: <FullMovieList/> },
      { path: "popular", element: <Popular /> },
      { path: "movie/:id", element: <MoviePage />, loader: movieLoader}
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);