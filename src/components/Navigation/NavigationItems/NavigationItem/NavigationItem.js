import React from 'react'
import {Link} from 'react-router-dom'
const navigationItem = (props) => (
    <li className="navigation__item">
        <Link to={props.link} 
           className="navigation__link">{props.children}</Link>
    </li>
)
export default navigationItem;