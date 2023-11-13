import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Shape from '../assets/roundShapes.png';


const Home = () => {
    const navigate = useNavigate()

    return (  
        <div className="home-container">
            <div className="home">
                <div className="text-container">
                    <img src={Shape} alt="shapes" className="round-shapes" />
                    <h1 className='animate-hello'>HELLO,</h1>
                    <h1 className='animate-my-name'>MY NAME IS</h1>
                    <h1 className='animate-vic'>VICTOR</h1>
                </div>
                    <button className="projects-btn" onClick={() => { navigate('/projects')}}>PROJECTS</button>
            </div>
        </div>
    );

}

export default Home;