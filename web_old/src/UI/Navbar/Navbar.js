import React from 'react';
import style from './Navbar.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ children, navigations, onClick }) => {
    return (
        <nav className={style.navbar} data-test="component-navbar">
            {navigations.map(navigation => (
                <Link key={navigation.menu} to={navigation.to} className={style.navbar__menu}>{navigation.menu}</Link>
            ))}
        </nav>
    )
}

Navbar.propTypes = {
    navigations: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string,
            menu: PropTypes.string
        })).isRequired,
    onClick: PropTypes.func
}

export { Navbar };