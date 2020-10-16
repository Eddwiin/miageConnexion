import React, { lazy, Suspense } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import SETUP_ROUTES from './configs/setupRoutes';
import { connect } from 'react-redux';

const Home = lazy(() => import('./pages/containers/Home/Home'));
const CMS = lazy(() => import('./pages/containers/CMS/CMS'));

const App = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {!props.isAuthentified && (
            <React.Fragment>
              <Route path={SETUP_ROUTES.HOME} render={() => <Home />} />
              <Redirect to={SETUP_ROUTES.HOME} />
            </React.Fragment>
          )}
          {props.isAuthentified && (
            <React.Fragment>
              <Route path={SETUP_ROUTES.CMS} render={() => <CMS />} />
              <Redirect to={SETUP_ROUTES.CMS} />
            </React.Fragment>
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  isAuthentified: !!state.auth.userId
})

export default connect(mapStateToProps)(App);
