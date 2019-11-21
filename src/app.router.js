import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home'
const Error404Component = lazy(() => import('./components/error-404/error404'));

const AppRouter = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route component={Error404Component}></Route>
                <Redirect component={Error404Component}></Redirect>
            </Switch>
        </Suspense>
    </Router>
)

export default AppRouter;