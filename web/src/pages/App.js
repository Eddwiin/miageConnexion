import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import SETUP_ROUTES from '../configs/setupRoutes';
import { connect } from 'react-redux';
import * as actions from './../stores/actions';

const Navbar = lazy(() => import('./../UI').then(mod => ({ default: mod.Navbar })))
const Home = lazy(() => import('./containers/Home/Home'));
const Cms = lazy(() => import('./containers/Cms/Cms'));
const Login = lazy(() => import('./components/Login/Login'));
const Logout = lazy(() => import('./components/Logout/Logout'));

export function UnconnectedApp({ checkIsAuthentified, isAuthentified }) {

  let loadRoutes = React.useCallback(() => {
    if (!isAuthentified) {
      const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-unlogged">
        <Link to={SETUP_ROUTES.LOGIN}>Login</Link>
      </Navbar>)

      return (
        <Switch data-test="routes-unlogged">
          <Route exact path={SETUP_ROUTES.DEFAULT} render={() => <Redirect to={SETUP_ROUTES.HOME} />} />
          <Route path={SETUP_ROUTES.HOME} render={() => <Home loadNavbar={loadNavbar} />} />
          <Route exact path={SETUP_ROUTES.LOGIN} render={() => <Login loadNavbar={loadNavbar} />} />
        </Switch>
      )
    } else {
      const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-logged">
        <Link to={SETUP_ROUTES.ADD_EVENT}>Ajouter événement</Link>
        <Link to={SETUP_ROUTES.LOGOUT}>Deconnexion</Link>
      </Navbar>)

      return (
        <Switch data-test="routes-logged">
          <Route exact path={SETUP_ROUTES.DEFAULT} render={() => <Redirect to={SETUP_ROUTES.CMS} />} />
          <Route path={SETUP_ROUTES.CMS} render={() => <Cms loadNavbar={loadNavbar} />} />
          <Route exactpath={SETUP_ROUTES.LOGOUT} component={Logout} />
        </Switch>
      )
    }
  }, [isAuthentified]);

  React.useEffect(() => {
    checkIsAuthentified();
  }, [isAuthentified, checkIsAuthentified]);


  // const loadRoutes = () => {
  //   if (!isAuthentified) {
  //     const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-unlogged">
  //       <Link to={SETUP_ROUTES.LOGIN}>Login</Link>
  //     </Navbar>)

  //     return (
  //       <Switch data-test="routes-unlogged">
  //         <Route exact path={SETUP_ROUTES.DEFAULT} render={() => <Redirect to={SETUP_ROUTES.HOME} />} />
  //         <Route path={SETUP_ROUTES.HOME} render={() => <Home loadNavbar={loadNavbar} />} />
  //         <Route exact path={SETUP_ROUTES.LOGIN} render={() => <Login loadNavbar={loadNavbar} />} />
  //       </Switch>
  //     )
  //   } else {
  //     const loadNavbar = () => (<Navbar title="Miage Connexion" data-test="navbar-logged">
  //       <Link to={SETUP_ROUTES.ADD_EVENT}>Ajouter événement</Link>
  //       <Link to={SETUP_ROUTES.LOGOUT}>Deconnexion</Link>
  //     </Navbar>)

  //     return (
  //       <Switch data-test="routes-logged">
  //         <Route exact path={SETUP_ROUTES.DEFAULT} render={() => <Redirect to={SETUP_ROUTES.CMS} />} />
  //         <Route path={SETUP_ROUTES.CMS} render={() => <Cms loadNavbar={loadNavbar} />} />
  //         <Route exactpath={SETUP_ROUTES.LOGOUT} component={Logout} />
  //       </Switch>
  //     )
  //   }
  // }

  return (
    <Router data-test="component-app">
      <Suspense fallback={<div>Loading...</div>}>
        {loadRoutes()}
      </Suspense>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuthentified: !!state.auth.access_token
})

const mapDispatchToProps = dispatch => ({
  checkIsAuthentified: () => dispatch(actions.authCheckState())
})

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
