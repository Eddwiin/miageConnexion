import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, width = "100"  }) => {

    return (
        <React.Fragment>
            <button className={"btn w-" + width} type="submit">{label}</button>
        </React.Fragment>
    )
}   

Button.propTypes = {
    label: PropTypes.string.isRequired,
    width: PropTypes.oneOf(["100", "75", "50", "25"])
}

export  { Button };