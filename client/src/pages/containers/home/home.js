import React, { Suspense, lazy } from 'react';
import style from './home.module.scss';
import { Switch, Route } from 'react-router-dom';
import APP_ROUTES from '../../../configs/routes';

const ListEventsComponent = lazy(() => import('./../../components/list-events/list-events'));
const LoginComponent = lazy(() => import('./../../components/login/login'));

const HomeContainer = ({ loadNavbar }) => {

    const laodRoutes = () => (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path={APP_ROUTES.LIST_EVENTS} component={ListEventsComponent}></Route>
                <Route path={APP_ROUTES.LOGIN} component={LoginComponent}></Route>
            </Suspense>
        </Switch>
    )

    return (
        <React.Fragment>
            {loadNavbar()}
            <div className={style.home}>
                {laodRoutes()}
            </div>
        </React.Fragment>
    )
}

export default HomeContainer;