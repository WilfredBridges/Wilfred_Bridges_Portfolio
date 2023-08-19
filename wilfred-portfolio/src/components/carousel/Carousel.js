import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'; // Import your CSS file


const contentStyle = {
  height: '160px',
  background: '#364d79',
};

const MyCarousel = () => {
  const slides = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      liveDemoLink: 'https://weathermenow.netlify.app/',
      githubLink: 'https://github.com/project1',
      imageSrc: '../../media/images/top-view.jpg'
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      liveDemoLink: 'https://weathermenow.netlify.app/',
      githubLink: 'https://github.com/project2',
      imageSrc: '../../media/images/top-view.jpg'
    },
    // Add more slides here...
  ];

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <Carousel afterChange={onChange}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="slide-description">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <div className="buttons">
                  <a href={slide.liveDemoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={slide.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="slide-image" style={{ ...contentStyle, backgroundImage: `url(${slide.imageSrc})` }}></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
