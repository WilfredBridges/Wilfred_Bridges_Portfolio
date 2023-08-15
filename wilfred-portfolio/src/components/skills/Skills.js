// components/Skills.js
import React from 'react';
import './Skills.css';

import htmlLogo from '../../media/images/html5.svg';
import cssLogo from '../../media/images/css3.svg';
import javascriptLogo from '../../media/images/javascript.svg';
import reactLogo from '../../media/images/react.svg';
import nodejsLogo from '../../media/images/nodejs.svg';

const Skills = () => {
  const skills = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodejsLogo },
    // Add more skills with their logos
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.logo} alt={`${skill.name} Logo`} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
