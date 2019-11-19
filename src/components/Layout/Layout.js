import React  from "react";
import Aux from '../../hoc/Helper';
import Toolbar from '../Navigation/Toolbar/Toolbar'

import  './footer.scss'
const layout = (props) => (
    <Aux>
        <div>
            <Toolbar/> 
        </div> 
    <main>
        {props.children}
    </main>
    <footer className="footer">
        <div className="footer__logo-box">
            <img  alt="footer logo" className="footer__logo"/>
        </div>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href='/' className="footer__link">Home</a>
                    </li>
                    <li className="footer__item">
                        <a href='/' className="footer__link">Contact</a>
                    </li>
                    <li className="footer__item">
                        <a href='/' className="footer__link">Insta</a>
                    </li>
                </ul>

                <p className="footer__social">Link</p>
                <a href='/' className="footer__link">Insta</a>

    </footer>
    </Aux>
);

export default layout;