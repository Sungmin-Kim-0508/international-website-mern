import React from "react";
import { Route } from "react-router-dom";
import routes from "commons/__routes__";
import { News, NewsDetail } from "pages";

function NewsRoutes() {
  return (
    <>
      <Route path={routes.news} component={News} exact={true} />
      <Route path={`${routes.news}/:id`} component={NewsDetail} />
    </>
  );
}

export default NewsRoutes;
