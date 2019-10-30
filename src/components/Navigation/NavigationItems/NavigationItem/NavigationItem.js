import React from 'react'
const navigationItem = (props) => (
    <li className="navigation__item">
        <a href={props.link} 
           className="navigation__link">{props.children}</a>
    </li>
)
export default navigationItem;