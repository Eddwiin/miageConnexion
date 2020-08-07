import React from 'react';
import style from './cms.module.scss';
import { Link } from 'react-router-dom';
import APP_ROUTES from './../../../configs/routes';
import { Navbar } from './../../../UI';

const CMSContainer = () => {
    return (
        <React.Fragment>
            <Navbar title="Miage Connexion">
                <Link to={APP_ROUTES.ADD_EVENT}>Ajouter événement</Link>
                <Link to={APP_ROUTES.LOGOUT}>Deconnexion</Link>
            </Navbar>
            
            <div className={style.cms}>
                CMS CONTAINER
           </div>
        </React.Fragment>
    )
}

export default CMSContainer;