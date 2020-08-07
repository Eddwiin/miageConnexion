import React from 'react';
import PropTypes from 'prop-types';
import style from './button.module.scss';

const Button = ({ label, color, btnStyle, type = "submit" }) => {
    // const btnClor = (color) ? "btn--" + color : undefined;
    const btnColor = () => {
        switch (color) {
            case "danger":
                return style.btn_danger;
            default:
                return style.btn_primary
        }
    }

    return (
        <button style={btnStyle} className={`${style.btn} ${btnColor()}`} type={type}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
}

export { Button };