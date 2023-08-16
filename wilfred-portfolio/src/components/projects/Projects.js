// components/Projects.js
import React from 'react';
import './Projects.css'; // Import your custom CSS

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      image: '../components/media/images/react.svg', // Replace with the actual path
      liveDemoLink: 'link-to-demo-1', // Replace with the actual link
      githubLink: 'link-to-github-1' // Replace with the actual link
    },
    {
      title: 'Project 2',
      image: '../components/media/images/react.svg',
      liveDemoLink: 'link-to-demo-2',
      githubLink: 'link-to-github-2'
    },
    {
      title: 'Project 3',
      image: '../components/media/images/react.svg',
      liveDemoLink: 'link-to-demo-3',
      githubLink: 'link-to-github-3'
    }
  ];

  return (
    <div className="projects-carousel">
      {projects.map((project, idx) => (
        <div className="carousel-item" key={idx}>
          <img
            className="carousel-image"
            src={project.image}
            alt={`Slide ${idx + 1}`}
          />
          <div className="carousel-caption">
            <h3>{project.title}</h3>
            <div className="button-links">
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
