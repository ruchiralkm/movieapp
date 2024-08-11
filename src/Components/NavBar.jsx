import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";

//------------ Refresh webpage ------------
const refreshPage = () => {
  window.location.reload();
};

const NavBar = () => {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        type: "spring",
      }}
      className="navbar"
    >
      <div onClick={refreshPage} style={{ cursor: "pointer" }} className="logo">
        <span style={{ color: "#03c03c" }}>E</span>
        <span>
          Movie<span style={{ color: "red" }}>s</span>
        </span>
      </div>
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
    </motion.nav>
  );
};

export default NavBar;
