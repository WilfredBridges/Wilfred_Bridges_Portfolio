// components/Header.js
import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar'
import Socials from '../socials/Socials'

const Header = () => {
  return (
    <header className="header">
      <Navbar /> 
      <Socials />
      <div className="header-content">
        <h1><strong className='name'>W</strong>ilfred <strong className='name'>B</strong>ridges</h1>
        <p>Web Developer</p>
      </div>
    </header>
  );
};

export default Header;
