import React from 'react';
import quizImage from '../../assets/classroom-unsplash.jpg';
import dishImage from '../../assets/Dish-Dash-image-maarten-van-den-heuve.jpg';
import calorieImage from '../../assets/dietpic.png';
import pixelImage from '../../assets/pixelMarketImage.png'


const Projects = () => {
 
  const projectsData = [
    { id: 1, title: 'Dish Dash', image: dishImage, dishLink: 'https://brennysouza.github.io/dish-dash/' },
    { id: 2, title: 'Calorie Quest', image: calorieImage, calorieQuestLink: 'https://calorie-quest-87555c29dfe4.herokuapp.com/' },
    { id: 3, title: 'E-Commerce API', image: pixelImage, pixelMarketLink: 'https://drive.google.com/file/d/1T938A97pL9xfBJQtZ0wezvkWoU9in8bF/view' },
    { id: 4, title: 'JavaScript Quiz', image: quizImage, quizLink: 'https://pc-vic.github.io/JavaScript-Quiz-app/' },

  ];

  return (
    <>
      <div>
        <h2 className='my-project-heading'>My Projects</h2>
        <div className="projects-container">
          {projectsData.map((project) => (
            <a
            key={project.id}
            href={project.id === 1 ? project.dishLink :
              project.id === 4 ? project.quizLink :
              project.id === 2 ? project.calorieQuestLink :
              project.id === 3 ? project.pixelMarketLink : '#'}

            target="_blank"
            rel="noopener noreferrer"
            className="project-card" 
            style={{ backgroundImage: `url(${project.image})` }}
            >
              <h3 className='project-title'>{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </>
    );
  }

export default Projects;
