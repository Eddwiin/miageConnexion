import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import APP_ROUTES from '../configs/routes';
import { connect } from 'react-redux';
import * as actions from './../stores/actions';
import { Navbar } from './../UI';

const HomeContainer = lazy(() => import('./containers/home/home'));
const CMSContainer = lazy(() => import('./containers/cms/cms'));
const LoginComponent = lazy(() => import('./components/login/login'));
const LogoutComponent = lazy(() => import('./components/logout/logout'));

function App({ checkIsAuthentified, isAuthentified }) {

  useEffect(() => {
    checkIsAuthentified();
  })

  let loadNavbar = () => { };

  if (!isAuthentified) {
    loadNavbar = () => (<Navbar title="Miage Connexion">
      <Link to={APP_ROUTES.LOGIN}>Login</Link>
    </Navbar>)
  } else {
    loadNavbar = () => (
      <Navbar title="Miage Connexion">
        <Link to={APP_ROUTES.ADD_EVENT}>Ajouter événement</Link>
        <Link to={APP_ROUTES.LOGOUT}>Deconnexion</Link>
      </Navbar>
    )
  }

  let routes = (
    <React.Fragment>
      <Route exact path={APP_ROUTES.DEFAULT} render={() => <Redirect to={APP_ROUTES.HOME} /> } />
      <Route path={APP_ROUTES.HOME} render={() => <HomeContainer loadNavbar={loadNavbar} />} />
      <Route path={APP_ROUTES.LOGIN} render={() => <LoginComponent loadNavbar={loadNavbar} />} />
    </React.Fragment>
  );

  if (isAuthentified) {
    routes = (
      <React.Fragment>
        <Route path={APP_ROUTES.CMS} render={() => <CMSContainer loadNavbar={loadNavbar} />} />
        <Route path={APP_ROUTES.LOGOUT} component={LogoutComponent} />
        <Redirect to={APP_ROUTES.CMS} />
      </React.Fragment>
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
