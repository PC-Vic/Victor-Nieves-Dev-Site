import React from 'react';

const Projects = () => {
  // Placeholder data for projects
  const projectsData = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
    { id: 4, title: 'Project 4', description: 'Description 4' },
    { id: 5, title: 'Project 5', description: 'Description 5' },
    { id: 6, title: 'Project 6', description: 'Description 6' },
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
