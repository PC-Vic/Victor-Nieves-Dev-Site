import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Shape from '../../assets/roundShapes.png';


const Home = () => {
    const navigate = useNavigate()

    return (  
        <div className="home-container">
          
                <div className="text-container">
                   
                    <h1 className='animate-hello'>HELLO,</h1>
                    <h1 className='animate-my-name'>MY NAME IS</h1>
                    <h1 className='animate-vic'>VICTOR</h1>
                    <button className="projects-btn" onClick={() => { navigate('/projects')}}>PROJECTS</button>
                </div>
                    
                    <img src={Shape} alt="shapes" className="round-shapes" />
            </div>
    );

}

export default Home;