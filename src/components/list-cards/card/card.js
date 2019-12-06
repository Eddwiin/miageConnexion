import React from "react";

const CardComponent = props => (
  <div>
    {console.log(props)}
    <img src={props.event.imageUrl} />
  </div>
);

export default CardComponent;
