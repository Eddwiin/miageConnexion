import React from "react";
import { Navbar } from '../shared';
import Article from '../article/article';
import { Link } from "react-router-dom";
import './home-container.scss';
import { APP_ROUTES } from "../../utils/route-config";

const HomeContainer = () => {

  return (
    <div className="home-container">
      <Navbar>
        <Link to={APP_ROUTES.LOGIN}>Login</Link>
      </Navbar>
      <Article></Article>
    </div>
  )
};

export default HomeContainer;
