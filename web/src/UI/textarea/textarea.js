import React from "react";
import Proptypes from "prop-types";
import style from "./textarea.module.scss";

const Textarea = ({
  name,
  textAreaStyle,
  placeholder,
  rows,
  cols,
  register,
  errorsTemplate,
  value,
  onChange = () => { },
}) => {
  return (
    <div style={style.formGroup}>
      <textarea
        name={name}
        className={style.formGroup__textarea}
        style={textAreaStyle}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        ref={register}
        aria-invalid={errorsTemplate ? "true" : "false"}
      ></textarea>

      {errorsTemplate && <span className={style.formGroup__errors}>{errorsTemplate}</span>}
    </div>

  );
};

Textarea.propTypes = {
  name: Proptypes.string.isRequired,
  style: Proptypes.object,
  placeholder: Proptypes.string,
  rows: Proptypes.string,
  cols: Proptypes.string,
  value: Proptypes.any,
  onChange: Proptypes.func,
};
export { Textarea };
