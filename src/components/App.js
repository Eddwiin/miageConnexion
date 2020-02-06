import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { APP_ROUTES } from "../utils/route-config";

const HomeContainer = lazy(() => import("./home/home-container"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to={APP_ROUTES.HOME} />}
        ></Route>
        <Route path={APP_ROUTES.HOME} component={HomeContainer}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
