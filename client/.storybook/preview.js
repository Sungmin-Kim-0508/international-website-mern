import React from "react";
import { addDecorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";

addDecorator(storyFn => (
  <Provider store={store}>
    <Router>{storyFn()}</Router>
  </Provider>
));
