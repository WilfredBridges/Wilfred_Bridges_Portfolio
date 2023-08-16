// components/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hey there, I'm Wilfred – a passionate front-end and aspiring back-end developer with a background as a dedicated educator. Over the past year, I've immersed myself in the world of coding, constantly refining my skills and delving into the exciting realms of web development.
          </p>
          <p>
            As a graduate in education, I've always been driven by the desire to learn and to share knowledge. Transitioning into the tech world has allowed me to blend my teaching instincts with my newfound passion for coding, creating intuitive and user-friendly digital experiences. My journey as a developer is fueled by a hunger for continuous learning, pushing boundaries, and embracing the ever-evolving landscape of technology.
          </p>
          <p>
            While my journey in coding might be relatively young, my determination to excel and my commitment to quality shine through in every project I undertake. With a strong foundation in front-end development, I've been delving into the intricacies of back-end systems, seeking to build a holistic understanding of the web development process.
          </p>
          <p>
            Beyond the world of code, I'm an avid sports enthusiast and a dedicated family person. Sports not only keep me active but also teach me valuable lessons about teamwork, discipline, and perseverance – qualities that I carry into my coding endeavors. And when I'm not crafting code or honing my skills, I'm cherishing moments with my family, finding a harmonious balance between my passions and my loved ones.
          </p>
          <p>
            Whether it's crafting elegant user interfaces or architecting robust back-end solutions, I'm thrilled to embark on this ever-evolving journey of coding, learning, and growth. Join me as I navigate the digital landscape, driven by curiosity, innovation, and the pursuit of excellence.
          </p>
        </div>
        <div className="about-image">
          <img src="your-image-path-here.jpg" alt="Wilfred's Image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
