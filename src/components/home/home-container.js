import React from "react";
import Navbar from './../layout/navbar';
import Article from '../article/article'
const HomeContainer = (props) => {
  return (
    <div className="home-container">
      <Navbar {...props}></Navbar>
      <Article></Article>
    </div>
  )
};

export default HomeContainer;
