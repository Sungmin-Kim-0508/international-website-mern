import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "commons/__routes__";
import { Header } from "components";
import { Home, SignIn, SignUp } from "pages";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
    </Switch>
  </Router>
);
