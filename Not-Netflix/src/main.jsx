import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Movies from './components/Movies';
// import Popular from './components/Popular';
import NotFound from './components/NotFound';
import Home from './components/Home';


import "./index.css"
import "./reset.css"


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Navbar />,
    errorElement: <NotFound />,
    children: [    
      { index: true, element: <Home /> },
      // { path: "movies", element: <Movies /> },
      // { path: "popular", element: <Popular /> },
      // { path: "contact", element: <Contact /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);