// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/free-solid-svg-icons/import.macro'
import React from 'react';
import { Link } from "react-router-dom";



const Navbar = () => {


    return (
        <nav className="navbar">
            <h2>Victor Nieves</h2>
            <div className="sidebar-links">
                <Link to="/about" className="home-link">About</Link>
                <Link to="/projects" className="forum-link">Projects</Link>
                <Link to="/contact" className="users-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;