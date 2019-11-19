import React from 'react'
import {Link} from 'react-router-dom'
const navigationItem = (props) => (
    <li className="navigation__item">
       {/*  <Link to={props.link} 
           className="navigation__link">{props.children}</Link> */}
           <a href="/" className="navigation__link">Home</a>
    </li>
)
export default navigationItem;