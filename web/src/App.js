import React, { lazy, Suspense } from 'react';
import { Redirect, Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import SETUP_ROUTES from './configs/setupRoutes';
import { connect } from 'react-redux';

const Home = lazy(() => import('./pages/containers/Home/Home'));
const Login = lazy(() => import('./pages/components/Login/Login'));
const CMS = lazy(() => import('./pages/containers/CMS/CMS'));

const Navbar = lazy(() => import('./UI').then(mod => ({ default: mod.Navbar })))

const App = (props) => {

  let loadNavbar = () => { };

  if (!props.isAuthentified) {
    loadNavbar = () => {
      const titleComp = () => (
        <React.Fragment>
          <Link to={SETUP_ROUTES.HOME}>MIAGECONNEXION</Link>
        </React.Fragment>
      )
      const menusComp = () => (
        <React.Fragment>
          <Link to={SETUP_ROUTES.LOGIN}>LOGIN</Link>
        </React.Fragment>
      )
      return (
        <Navbar titleComp={titleComp} menusComp={menusComp} />
      )
    }
  }
  return (
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {!props.isAuthentified && (
              <React.Fragment>
                  <Route path={SETUP_ROUTES.HOME} render={() => <Home loadNavbar={loadNavbar} />} />
                  <Route path={SETUP_ROUTES.LOGIN} render={() => <Login loadNavbar={loadNavbar} />} />
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
