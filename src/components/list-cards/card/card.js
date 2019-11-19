import React from "react";
import "./card.scss";
import Wrapper from "../../../hoc/Wrapper";
const CardComponent = props => (
  <Wrapper>
      <div className="card">
        <img className="card__image" src="http://via.placeholder.com/640x360" height="100vh" alt=""/>
        <figcaption className="card__caption">
          Short desc of the image
        </figcaption>
        <a href="/">Plus d'info &rarr;</a>
      </div>
  </Wrapper>
);

export default CardComponent;
