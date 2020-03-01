import React from "react";
import NewsRoutes from "./NewsRoutes";
import ForStudentsRoutes from "./ForStudentsRoutes";
import routes from "commons/__routes__";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Home, SignIn, SignUp, Header, UnknownPage, ForStudents } from "pages";

export default (): React.ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.forStudents} component={ForStudents} exact={true} />
      <NewsRoutes />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
      <Route path="*" component={UnknownPage} />
    </Switch>
  </Router>
);
