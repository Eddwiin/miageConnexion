import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import APP_ROUTES from '../configs/routes';
import { connect } from 'react-redux';
import * as actions from './../stores/actions';

const HomeContainer = lazy(() => import('./containers/home/home'));
const CMSContainer = lazy(() => import('./containers/cms/cms'));
const LogoutComponent = lazy(() => import('./components/logout/logout'));

function App({ checkIsAuthentified, isAuthentified }) {

  useEffect(() => {
    checkIsAuthentified();
  })

  let routes = (
    <Switch>
      <Route path={APP_ROUTES.HOME} component={HomeContainer} />
      <Redirect to={APP_ROUTES.HOME} />
    </Switch>
  );

  if (isAuthentified) {
    routes = (
      <Switch>
        <Route path={APP_ROUTES.CMS} component={CMSContainer} />
        <Route path={APP_ROUTES.LOGOUT} component={LogoutComponent} />
        <Redirect to={APP_ROUTES.CMS} />
      </Switch>
    )
  }


  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes}
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>

  );
}

const mapStateToProps = state => {
  return {
    isAuthentified: state.auth.access_token
  };
}

const mapDispatchToProps = dispatch => {
  return {
    checkIsAuthentified: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
