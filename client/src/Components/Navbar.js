import React, { useState } from 'react';
import { useDarkMode } from '../Hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, toggleDarkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    toggleDarkMode();
  };
  
  return (
    <nav className="navbar">
      <h1 className="nav-h1">World Cup</h1>
      <div className="dark-mode__toggle">
        <div 
          data-testid="dark-mode"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;