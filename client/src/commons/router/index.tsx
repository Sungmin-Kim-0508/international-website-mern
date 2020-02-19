import React from "react";
import NewsRoutes from "./NewsRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SignIn, SignUp, Header } from "pages";
import routes from "commons/__routes__";

export default (): React.ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
      <NewsRoutes />
    </Switch>
  </Router>
);
