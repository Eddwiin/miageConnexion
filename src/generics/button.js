import React from "react";
import "../assets/components/_button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <div>
    <a href={props.href} className="btn">
      {props.children}
    </a>
  </div>
);

Button.propTypes = {
  href: PropTypes.string.isRequired
};

export default Button;
