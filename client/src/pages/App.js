import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import APP_ROUTES from '../configs/routes';
import { Navbar } from '../UI';

const HomeContainer = lazy(() => import('./containers/home/home'));
const CMSContainer = lazy(() => import('./containers/cms/cms'));

function App() {

  const loadNavbar = () => (
    <Navbar title="Miage Connexion">
      <Link to={APP_ROUTES.LOGIN}>Login</Link>
    </Navbar>
  );

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={APP_ROUTES.HOME} render={() => <HomeContainer loadNavbar={loadNavbar} />} ></Route>
            <Route path={APP_ROUTES.CMS} component={CMSContainer}></Route>
            <Redirect to={APP_ROUTES.HOME}></Redirect>
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>

  );
}

export default App;
