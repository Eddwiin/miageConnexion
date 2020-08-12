import React, { lazy } from 'react';
import style from './cms.module.scss';
import { Switch, Route } from 'react-router-dom';
import APP_ROUTES from './../../../configs/routes';

const AddEditEventComponent = lazy(() => import('./../../components/add-edit-event/add-edit-event'));

const CMSContainer = ({ loadNavbar }) => {

    const loadRoutes = () => (
        <Switch>
            <Route to={APP_ROUTES.ADD_EVENT} component={AddEditEventComponent}></Route>
        </Switch>
    )

    return (
        <React.Fragment>
            {loadNavbar()}
            <div className={style.cms}>
                {loadRoutes()}
            </div>
        </React.Fragment>
    )
}

export default CMSContainer;