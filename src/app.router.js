import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ListCardsComponent from './components/list-cards/list-cards';
import Articles from './components/Articles/Articles'

const Error404Component = lazy(() => import('./components/error-404/error404'));

const AppRouter = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={ListCardsComponent}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route component={Error404Component}></Route>
                <Redirect component={Error404Component}></Redirect>
            </Switch>
        </Suspense>
    </Router>
)

export default AppRouter;