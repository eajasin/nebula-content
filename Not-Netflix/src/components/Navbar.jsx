import React from "react";
import { Link, Outlet } from 'react-router-dom'
import "./NavBar.css"

function Navbar() {
    return (
       <div>
       <nav className="navbar">
            <div className="navLeft">
                <img className="netflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"/>
               
                <Link to="/">Home</Link>
               
                
                <Link to="/movies">Movies</Link>
                
               
                <Link to="/popular">Popular</Link>
               
            </div>
            <div className="navRight">
                <input type="text" placeholder="title, people, genres"/>
                <img className="avatar"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            </div> 
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar