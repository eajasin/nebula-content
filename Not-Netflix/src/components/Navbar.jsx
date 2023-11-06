import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';


import "./NavBar.css"

export default function Navbar() {
    // console.log(movie, "resul")

    const [showTextBox, setShowTextBox] = useState(false);
    const [showSearchedMovieContainer, setShowSearchedMovieContainer] = useState(false);


    const toggleTextBox = () => {
        setShowTextBox(!showTextBox);
        setShowSearchedMovieContainer(!showTextBox)
    };

    const [show, handleShow] = useState(false)

    function fadeNavbar() {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    const [inputText, setInputText] = useState('')
    const [results, setResults] = useState([])

    function fetchMovies() {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTllNDliNDI5YWExMzQwODYwMWMzMWI4NmRlMjQ5MyIsInN1YiI6IjY1MzliMzdhNjc4MjU5MDEzY2QwYjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttg9njOCjKBo2Mig3i4pWmmH_ykYUrt_uESce4FQ1kA'
            }
        };

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${inputText}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response.results.slice(0, 3));
                setResults(response.results.slice(0, 3));
                console.log(results, "results");
            })
            .catch((err) => console.error(err));
    }


    // useEffect(() => {
    //     window.addEventListener("scroll", fadeNavbar)
    //     return () => window.removeEventListener("scroll", fadeNavbar)
    // }, [])


    return (
        <div className={show ? "navbar" : ""}>
            <nav className="navbar">
                <div className="navLeft">
                <Link to="/"> <img className="netflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" /></Link>

                    <Link to="/">Home</Link>


                    <Link to="/movies">Movies</Link>


                    <Link to="/popular">New & Popular</Link>

                </div>
                <div className="navRight">

                    {showTextBox ? (
                        <div className="searchBoxContainer">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search" data-name="MagnifyingGlass" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path>
                            </svg>
                            <input
                                className="searchTextBox"
                                onChange={(e) => {
                                    setInputText(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        fetchMovies();
                                        
                                    }
                                }}
                                placeholder="Titles, people, genres"
                                value={inputText} />

                            <div 
                            className="searchBoxClose"
                            onClick={() => {
                                    setShowTextBox(false);
                                 setShowSearchedMovieContainer(false)
                            //   setInputText("")
                            }}
                            >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="X" aria-labelledby="preview-modal-80017528" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><title id="preview-modal-80017528">close</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg></div>
                        </div>


                    ) : (
                        <svg onClick={toggleTextBox} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search" data-name="MagnifyingGlass" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path>
                        </svg>
                    )
                    }


                    <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />

                </div>
            </nav>
            {/* Your code for displaying movie results */}
            {showSearchedMovieContainer && (
            <div className="searchedMovieContainer">
                {results.map((result) => {
                    return (

                        <div
                            className="searchedMovieRow"
                            key={result.id}
                     
                        >

                            <img
                                className="searchedMovie"

                                src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                            />
                            <div className="searchMovieText">MovieName</div>


                        </div>
                    );
                })}
            </div>
            )}
            {/* end of code for displaying movie results */}
            <Outlet />
        </div>
    )
}

