import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { APP_ROUTES } from "../utils/route-config";

const HomeContainer = lazy(() => import("./home/home-container"));
const Modal = lazy(() => import('./shared/modal'));
const Login = lazy(() => import('./home/login'))

const App = (props) => {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={APP_ROUTES.HOME} />} ></Route>
          <Route path={APP_ROUTES.HOME} component={HomeContainer}></Route>
          <Route path={APP_ROUTES.LOGIN} render={ props => 
            <Modal {...props} title="Login" routeRedirect="/"><Login></Login></Modal>}>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )

};

export default App;
