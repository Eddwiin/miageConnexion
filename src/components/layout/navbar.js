import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ history }) => {

  const openModal = () => {
    history.push("/login");
  }

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__title">Miage connexion</div>
        <div className="navbar__menu">
          <Link onClick={openModal} to="#" className="navbar__menu--1">Log in</Link>
        </div>
      </div>

    </React.Fragment>
   
  )
};

export default Navbar;
