import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">Miage connexion</div>
      <div className="navbar__menu">
        <Link to="#" className="navbar__menu--1">Log in</Link>
      </div>
    </div>
  )
};

export default Navbar;
