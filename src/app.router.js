import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListCardsComponent from './components/list-cards/list-cards';

const Error404Component = lazy(() => import('./components/error-404/error404'));
const AuthContainer = lazy(() => import('./components/auth/auth'));

const AppRouter = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={ListCardsComponent}></Route>
                <Route path="/auth" component={AuthContainer}></Route>
                <Route component={Error404Component}></Route>
            </Switch>
        </Suspense>
    </Router>
)

export default AppRouter;