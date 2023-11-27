import React, { useEffect, useState } from 'react';
import './HamburgerMenu.css';



const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Function to toggle the menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    // Effect to hide the menu by default and show it at 812px
    useEffect(() => {
      const handleResize = () => {
        setIsOpen(window.innerWidth >= 812);
      };
  
      // Initial check on mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      {/* Hamburger icon lines */}
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>

      {/* Menu items */}
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
