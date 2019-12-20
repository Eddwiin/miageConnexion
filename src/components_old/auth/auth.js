import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const LoginComponent = lazy(() => import("./login"));

export default class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadRoutes() {
    return (
      <Switch>
        <Route path="/login" component={LoginComponent}></Route>
        <Redirect from="/" to="/auth/login"></Redirect>
      </Switch>
    );
  }

  render() {
    return <div>{this.loadRoutes()}</div>;
  }
}
