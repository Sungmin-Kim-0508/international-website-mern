import React from "react";
import NewsRoutes from "./NewsRoutes";
import routes from "commons/__routes__";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Home, SignIn, SignUp, Header, UnknownPage } from "pages";

export default (): React.ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
      <NewsRoutes />
      <Route path="*" component={UnknownPage} />
    </Switch>
  </Router>
);
