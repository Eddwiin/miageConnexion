import React from "react";
import "../assets/components/_button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <div className="btn">
    <a href={props.href} className="btn__link">
      {props.children}
    </a>
  </div>
);

Button.propTypes = {
  href: PropTypes.string.isRequired
};

export default Button;
