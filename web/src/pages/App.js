import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import SETUP_ROUTES from '../configs/setupRoutes';
import { connect } from 'react-redux';

const Navbar = lazy(() => import('./../UI').then(mod => ({ default: mod.Navbar })))
const Home = lazy(() => import('./containers/Home/Home'));
const Cms = lazy(() => import('./containers/Cms/Cms'));
const Login = lazy(() => import('./components/Login/Login'));
const Logout = lazy(() => import('./components/Logout/Logout'));

function App({ isAuthentified }) {

  let routes = () => { };

  if (!isAuthentified) {
    const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-unlogged">
      <Link to={SETUP_ROUTES.LOGIN}>Login</Link>
    </Navbar>)

    routes = () => (
      <Switch data-test="routes-unlogged">
        <Route exact path={SETUP_ROUTES.DEFAULT} render={() => <Redirect to={SETUP_ROUTES.HOME} />} />
        <Route exact path={SETUP_ROUTES.LOGIN} render={() => <Login loadNavbar={loadNavbar} /> } />
        <Route path={SETUP_ROUTES.HOME} render={() => <Home loadNavbar={loadNavbar} />} />
      </Switch>
    )
  } else {
    const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-logged">
      <Link to={SETUP_ROUTES.ADD_EVENT}>/cmsAjouter événement</Link>
      <Link to={SETUP_ROUTES.LOGOUT}>Deconnexion</Link>
    </Navbar>)

    routes = () => (
      <Switch data-test="routes-logged">
        <Route path={SETUP_ROUTES.CMS} render={() => <Cms loadNavbar={loadNavbar} />} />
        <Route path={SETUP_ROUTES.LOGOUT} component={Logout} />
        <Redirect to={SETUP_ROUTES.CMS} />
      </Switch>
    )
  }

  return (
    <Router data-test="component-app">
      <Suspense fallback={<div>Loading...</div>}>
        {routes()}
      </Suspense>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuthentified: !!state.auth.access_token
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
