import React from 'react';
import '../styles/navbarStyle.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title"><a href="/">Math Magicians</a></div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="calculator">Calculator</a></li>
        <li><a href="quote">Quote</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
