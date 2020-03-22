import React from "react";
import './navbar.scss';

const Navbar = ({ children }) => {
  return (
      <div className="navbar">
        <div className="navbar__title">Miage connexion</div>
        <div className="navbar__menu">
          { children }
          {/* <Link onClick={openModal} to="#" className="navbar__menu--1">Log in</Link> */}
        </div>
      </div>   
  )
};

export { Navbar };
