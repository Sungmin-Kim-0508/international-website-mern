import React from "react";
import { Route } from "react-router-dom";
import routes from "commons/__routes__";
import { News, NewsDetail, NewsEditDetail } from "pages";

function NewsRoutes() {
  return (
    <>
      <Route path={routes.news} component={News} exact={true} />
      <Route path={`${routes.news}/:id`} component={NewsDetail} exact={true} />
      <Route
        path={`${routes.news}/:id${routes.newsEdit}`}
        component={NewsEditDetail}
        exact={true}
      />
    </>
  );
}

export default NewsRoutes;
