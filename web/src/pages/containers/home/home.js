import React, { Suspense, lazy } from 'react';
import style from './home.module.scss';
import { Switch, Route, Link } from 'react-router-dom';
import APP_ROUTES from './../../../configs/routes';
import { Navbar } from './../../../UI';

const ListEventsComponent = lazy(() => import('./../../components/list-events/list-events'));
const LoginComponent = lazy(() => import('./../../components/login/login'));

const HomeContainer = () => {

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
            <Navbar title="Miage Connexion">
                <Link to={APP_ROUTES.LOGIN}>Login</Link>
            </Navbar>
            <div className={style.home}>
                {laodRoutes()}
            </div>
        </React.Fragment>
    )
}

export default HomeContainer;