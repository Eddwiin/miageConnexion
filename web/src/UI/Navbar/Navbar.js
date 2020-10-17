import React from 'react';
import style from './Navbar.module.scss';
import PropTypes from 'prop-types';

const Navbar = (props) => (
    <div className={style.navbar}>
        {props.titleComp && (<div className={style.navbar__title}>
            {props.titleComp()}
        </div>)}
        
        {props.menusComp && (<div className={style.navbar__menus}>
            {props.menusComp()}
        </div>)}
    </div>
)

Navbar.propTypes = {
    titleComp: PropTypes.func,
    menusComp: PropTypes.func
}

export { Navbar };