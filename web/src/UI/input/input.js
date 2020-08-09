import React from "react";
import Proptypes from "prop-types";
import style from "./input.module.scss";

const Input = ({
  name,
  inputStyle,
  placeholder,
  type = "text",
  register,
  errorsTemplate,
  autoComplete = "off",
  value,
  onChange = () => { }
}) => {
  return (
    <div className={style.formGroup}>
      <input
        name={name}
        className={style.formGroup__input}
        type={type}
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={register}
        aria-invalid={errorsTemplate ? "true" : "false"} 
        autoComplete={autoComplete}
      />
      { errorsTemplate && <span className={style.formGroup__errors}>{errorsTemplate}</span> }
    </div>

  );
};

Input.propTypes = {
  name: Proptypes.string.isRequired,
  style: Proptypes.object,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  autoComplete: Proptypes.string,
  value: Proptypes.any.isRequired,
  onChange: Proptypes.func.isRequired,
  errorsTemplate: Proptypes.object
};
export { Input };
