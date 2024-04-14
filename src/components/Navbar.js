import React from "react";

import "./Navbar.css";

export default function Navbar(){
    return( 
    <nav className="nav">
        <a href="/" className="navCadburry">Cadburry</a>
        <ul>
            <li>
                <a href="/cast">Cast</a>
            </li>
            <li>
                <a href="/release-info">Release Info</a>
            </li>
            <li>
                <a href="/videos">Videos</a>
            </li>
        </ul>
    </nav>
    )
}