import React from "react";
import "./card.scss";
import Aux from "../../../hoc/Helper";
const CardComponent = props => (
  <Aux>
      <div className="card">
        <img className="card__image" src="http://via.placeholder.com/640x360" />
        <figcaption className="card__caption">
          Short desc of the image
        </figcaption>
        <a href="/">Plus d'info &rarr;</a>
      </div>
  </Aux>
);

export default CardComponent;
