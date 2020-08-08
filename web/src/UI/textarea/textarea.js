import React from "react";
import Proptypes from "prop-types";
import style from "./textarea.module.scss";

const Textarea = ({
  textAreaStyle,
  placeholder,
  rows,
  cols,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <textarea
        className={style.textarea}
        style={textAreaStyle}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      ></textarea>

      {
        touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))
      }
    </div>

  );
};

Textarea.propTypes = {
  style: Proptypes.object,
  placeholder: Proptypes.string,
  rows: Proptypes.string,
  cols: Proptypes.string,
};
export { Textarea };
