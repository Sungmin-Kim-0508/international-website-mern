import React from "react";
import routes from "commons/__routes__";
import { Route } from "react-router-dom";
import { ForStudents } from "pages";

function ForStudentsRoutes() {
  return (
    <>
      <Route path={routes.forStudents} component={ForStudents} exact={true} />
    </>
  );
}

export default ForStudentsRoutes;
