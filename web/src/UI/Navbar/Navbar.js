import React from 'react';
import style from './Navbar.module.scss';
import PropTypes from 'prop-types';

const Navbar = ({ children, title, onClick }) => {
    return (
        <div className={style.navbar} data-test="component-navbar">
            <div className={style.navbar__title} onClick={onClick} data-test="title-text">{title}</div>
            <div className={style.navbar__menu}>
                {children}
            </div>
        </div>
    )
}

Navbar.prototype = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export { Navbar };