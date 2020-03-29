import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, width = "100", color, style }) => {
    const btnClor = (color) ? "btn--" + color : undefined;

    return (
        <React.Fragment>
            <button style={style} className={"btn w-" + width + " " + btnClor} type="submit">{label}</button>
        </React.Fragment>
    )
}   

Button.propTypes = {
    label: PropTypes.string.isRequired,
    width: PropTypes.oneOf(["100", "75", "50", "25"]),
    color: PropTypes.string,
    style: PropTypes.object
}

export  { Button };