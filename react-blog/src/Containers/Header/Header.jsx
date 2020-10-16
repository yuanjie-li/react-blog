import React from 'react';
import './style_header.css';

// Import Components


const Header = (props) => {

  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div>
        TODO Static Content
      </div>

    </header>
  );
}

export default Header;
