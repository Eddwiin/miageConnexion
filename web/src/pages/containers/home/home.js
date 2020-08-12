import React, { Suspense, lazy } from 'react';
import style from './home.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import APP_ROUTES from './../../../configs/routes';

const ListEventsComponent = lazy(() => import('./../../components/list-events/list-events'));

const HomeContainer = ({ loadNavbar }) => {

    const loadRoutes = () => (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path={APP_ROUTES.LIST_EVENTS} component={ListEventsComponent} />
                <Redirect to={APP_ROUTES.LIST_EVENTS} />
            </Suspense>
        </Switch>
    )

    return (
        <React.Fragment>
            {loadNavbar()}
            <div className={style.home}>
                {loadRoutes()}
            </div>
        </React.Fragment>
    )
}

export default HomeContainer;