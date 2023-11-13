import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    return (  
        <div className="home-container">
            <div className="home">
                <div className="text-container">
                    <h1>HELLO,</h1>
                    <h1>MY NAME IS</h1>
                    <h1>VICTOR</h1>
                </div>
                    <button className="projects-btn" onClick={() => { navigate('/projects')}}>PROJECTS</button>
            </div>
        </div>
    );

}

export default Home;