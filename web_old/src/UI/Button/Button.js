import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';
import { colorType } from '../../helpers/proptype';

const Button = ({ label, color="primary", btnStyle, type = "submit" }) => {

    const btnColor = () => {
        switch (color) {
            case "danger":
                return style.btn_danger;
            default:
                return style.btn_primary
        }
    }

    return (
        <button data-test="component-button" style={btnStyle}
            className={`${style.btn} ${btnColor()}`} type={type}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: colorType(),
    btnStyle: PropTypes.object,
    type: PropTypes.string,
}

export { Button };