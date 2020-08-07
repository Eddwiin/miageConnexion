import React from "react";
import Proptypes from "prop-types";
import style from "./input.module.scss";

const Input = ({
  inputStyle,
  placeholder,
  type = "text",
  value,
  onChange = () => {}
}) => {
  return (
    <input
      className={style.input}
      type={type}
      style={inputStyle}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  style: Proptypes.object,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  value: Proptypes.any.isRequired,
  onChange: Proptypes.func.isRequired
};
export { Input };
