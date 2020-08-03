import React from "react";
import style from './navbar.module.scss';
import PropTypes from 'prop-types';

const Navbar = ({ children, title, onClick }) => {

  return (
    <div className={style.navbar}>
      <div className={style.navbar__title} onClick={onClick}>{title}</div>
      <div className={style.navbar__title}>
        {children}
      </div>
    </div>
  )
};

Navbar.prototype = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export { Navbar };
