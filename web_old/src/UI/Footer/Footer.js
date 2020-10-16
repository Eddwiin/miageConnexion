import React from 'react';
import SETUP_ROUTES from '../../configs/setupRoutes';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className={style.footer}>
                <ul className={style.footer__nav}>
                    <li className={style.footer__nav__item}>
                        <Link to={SETUP_ROUTES.HOME} className={style.footer__nav__link}>Accueil</Link>
                    </li>
                </ul>

                <p className={style.footer__nav__copyright}>
                    &copy; Copyright 2020 by Don Dood. Doody Impact is in the house.
          </p>
            </footer>
        </React.Fragment>
    )
}

export { Footer }