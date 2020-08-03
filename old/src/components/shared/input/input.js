import React from "react";
import Proptypes from "prop-types";
import "./input.scss";

const Input = ({
  style,
  placeholder,
  type = "text",
  value,
  handleChange = () => {}
}) => {
  return (
    <input
      className="input"
      type={type}
      style={style}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

Input.propTypes = {
  style: Proptypes.object,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  value: Proptypes.any,
  handleChange: Proptypes.func
};
export { Input };
