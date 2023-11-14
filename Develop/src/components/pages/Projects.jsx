import React from 'react';

const Projects = () => {
 
  const projectsData = [
    { id: 1, title: 'Dish Dash' },
    { id: 2, title: 'Calorie Quest' },
    { id: 3, title: 'Weather Wizard' },
    { id: 4, title: 'Pixel Market' },
    { id: 5, title: 'JavaScript Quiz' },
    { id: 6, title: 'Password Gen' },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
