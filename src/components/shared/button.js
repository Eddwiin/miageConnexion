import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, width = "100", mode }) => {
  return (
    <React.Fragment>
      <button className={"btn w-" + width + " " + mode} type="submit">
        {" "}
        {label}{" "}
      </button>{" "}
    </React.Fragment>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.oneOf(["100", "75", "50", "25"])
};

export default Button;
