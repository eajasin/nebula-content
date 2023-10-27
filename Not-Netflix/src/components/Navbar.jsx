import React from "react";
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <a>
                <Link to="/">Home</Link>
                </a>
                <a>
                <Link to="/">Movies</Link>
                </a>
                <a>
                <Link to="/">Popular</Link>
                </a>
                <a>
                <Link to="/">Search Bar</Link>
                </a>
               
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar