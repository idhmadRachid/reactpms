// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          Riad Lux
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
          <NavLink to="/facilities">Facilities</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
