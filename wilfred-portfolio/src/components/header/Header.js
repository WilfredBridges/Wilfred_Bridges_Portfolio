// components/Header.js
import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <header className="header">
      <Navbar /> {/* Include the Navbar component */}
      <div className="header-content">
        <h1>Wilfred Bridges</h1>
        <p>Web Developer</p>
      </div>
    </header>
  );
};

export default Header;
