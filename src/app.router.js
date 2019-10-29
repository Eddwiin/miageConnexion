import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const AppRouter = () => {
    <Suspense fallback={<div>Loading...</div>}></Suspense>
    <Switch>
        <Route exact path="/list-cards" component={List}/>
    </Switch>
}

export default AppRouter;