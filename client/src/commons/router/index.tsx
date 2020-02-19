import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "commons/__routes__";
import { Home, SignIn, SignUp, Header, News } from "pages";

export default (): React.ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
      <Route path={routes.news} component={News} />
    </Switch>
  </Router>
);
