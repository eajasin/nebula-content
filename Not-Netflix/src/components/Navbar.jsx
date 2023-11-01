import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom'
import "./NavBar.css"

function Navbar() {


    const [showTextBox, setShowTextBox] = useState(false);

    const toggleTextBox = () => {
        setShowTextBox(!showTextBox);
    };





    const [show, handleShow] = useState(false)

    function fadeNavbar() {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", fadeNavbar)
        return () => window.removeEventListener("scroll", fadeNavbar)
    }, [])


    return (
        <div className={show ? "navBarStyle" : ""}>
            <nav className="navbar">
                <div className="navLeft">
                    <img className="netflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />

                    <Link to="/">Home</Link>


                    <Link to="/movies">Movies</Link>


                    <Link to="/popular">Popular</Link>

                </div>
                <div className="navRight">

                    {showTextBox ? (
                        <input type="text" placeholder="Titles, people, genres"
                        />
                    ) : (
                        <svg onClick={toggleTextBox} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search" data-name="MagnifyingGlass" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path>
                        </svg>
                    )
                    }


                    <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar