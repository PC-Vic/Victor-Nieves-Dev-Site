import React from 'react';
import quizImage from '../../assets/classroom-unsplash.jpg';
import dishImage from '../../assets/Dish-Dash-image-maarten-van-den-heuve.jpg';
// import calorieImage from '../../assets/calorie-quest-image.jpg';

const Projects = () => {
 
  const projectsData = [
    { id: 1, title: 'Dish Dash', image: dishImage, dishLink: 'https://brennysouza.github.io/dish-dash/' },
    { id: 2, title: 'Calorie Quest', calorieQuestLink: 'https://calorie-quest-87555c29dfe4.herokuapp.com/' },
    { id: 3, title: 'Weather Wizard', weatherWizardLink: 'https://pc-vic.github.io/Weather-Wizard/' },
    { id: 4, title: 'Pixel Market', pixelMarketLink: 'https://drive.google.com/file/d/1T938A97pL9xfBJQtZ0wezvkWoU9in8bF/view' },
    { id: 5, title: 'JavaScript Quiz', image: quizImage, quizLink: 'https://pc-vic.github.io/JavaScript-Quiz-app/' },
    { id: 6, title: 'Password Gen', passwordGenLink: 'https://pc-vic.github.io/Password-Gen/' },

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
              project.id === 5 ? project.quizLink :
              project.id === 2 ? project.calorieQuestLink :
              project.id === 3 ? project.weatherWizardLink :
              project.id === 4 ? project.pixelMarketLink :
              project.id === 6 ? project.passwordGenLink : '#'}

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
