import React from "react";
import './navbar.scss';
import { APP_ROUTES } from "../../../utils/route-config";
import { useHistory } from "react-router-dom";

const Navbar = ({ children }) => {

  const history = useHistory();

  return (
      <div className="navbar">
        <div className="navbar__title" onClick={() => history.push(APP_ROUTES.HOME)}>Miage connexion</div>
        <div className="navbar__menu">
          { children }
        </div>
      </div>   
  )
};

export { Navbar };
