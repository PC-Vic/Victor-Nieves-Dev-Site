import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';



const HamburgerMenu = () => {
  const gitHubLink = "https://github.com/PC-Vic";
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      {/* Hamburger icon lines */}
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>

      {/* Menu items */}
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <div className="menu-items-background"></div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href={gitHubLink} target="_blank">Github</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
