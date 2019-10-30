import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import  './NavigationItems.scss'
import Aux from '../../../hoc/Helper';
const navigationItems = (props) => (
    <Aux>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navigation_toggle"/>
            <label htmlFor="navigation_toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">
                
            </div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <NavigationItem link="/" active>Home</NavigationItem>
                    <NavigationItem link="/">Contact</NavigationItem>
                    <NavigationItem link="/">About</NavigationItem>
                </ul>
            </nav>
        </div>
    </Aux>
);

export default navigationItems;