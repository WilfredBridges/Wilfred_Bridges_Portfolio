import React, { useState } from 'react';
import './Projects.css'; // You can create your own CSS file for styling

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief description of Project 1',
    previewImage: 'project1-preview.jpg',
    liveDemoLink: 'https://project1-demo.com',
    githubLink: 'https://github.com/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief description of Project 2',
    previewImage: 'project2-preview.jpg',
    liveDemoLink: 'https://project2-demo.com',
    githubLink: 'https://github.com/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Brief description of Project 3',
    previewImage: 'project3-preview.jpg',
    liveDemoLink: 'https://project3-demo.com',
    githubLink: 'https://github.com/project3'
  }
];

const Carousel = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const totalProjects = projects.length;

  const handlePrevClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-image">
          <img src={currentProject.previewImage} alt={currentProject.title} />
        </div>
        <div className="carousel-content">
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <div className="carousel-links">
            <a href={currentProject.liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
