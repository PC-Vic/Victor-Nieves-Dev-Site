import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return (  
        <div className="home-container">
            <div className="home">
                <div className="text-container">
                    <h1>HELLO,</h1>
                    <h1>MY NAME IS</h1>
                    <h1>VICTOR</h1>
                </div>
                <Link to="/projects">
                    <button className="projects-btn">PROJECTS</button>
                </Link>
            </div>
        </div>
    );

}

export default Home;