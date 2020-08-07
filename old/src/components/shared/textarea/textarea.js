import React from "react";
import Proptypes from "prop-types";
import "./textarea.scss";

const Textarea = ({
  style,
  placeholder,
  value,
  rows,
  cols,
  handleChange = () => {}
}) => {
  return (
    <textarea
      style={style}
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      onChange={handleChange}
    ></textarea>
  );
};

Textarea.propTypes = {
  style: Proptypes.object,
  placeholder: Proptypes.string,
  value: Proptypes.any,
  rows: Proptypes.string,
  cols: Proptypes.string,
  handleChange: Proptypes.func
};
export { Textarea };
