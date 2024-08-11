import React from "react";
import "./NavBar.scss"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <input type="checkbox" id="menu-toggle" />
      <label className="menu-icon" htmlFor="menu-toggle">
        <span className="nav-icon"></span>
        <span className="nav-icon"></span>
        <span className="nav-icon"></span>
      </label>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
