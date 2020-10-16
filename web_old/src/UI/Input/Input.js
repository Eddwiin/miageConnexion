import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.scss';

const Input = ({
    name,
    type = "text",
    inputStyle,
    placeholder,
    autoComplete = "off",
    value,
    onChange,
    register,
    errorsTemplate
}) => {
    return (
        <div className={style.formGroup} data-test="component-input">
            <input
                name={name}
                type={type}
                className={style.formGroup__input}
                style={inputStyle}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                ref={register}
            />
            {errorsTemplate && <span className={style.formGroup__errors}  data-test="error-message">{errorsTemplate}</span>}
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    inputStyle: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    errorsTemplate: PropTypes.object
}

export { Input };