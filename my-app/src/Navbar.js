import React from "react";
import "./Navbar.css"; 

const Navbar = ({ onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">Onebox</div>
      <div className="navbar-menu">Tim's Workspace</div>
      <div className="navbar-toggle">
        <button className="toggle-button" onClick={onToggleTheme}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
