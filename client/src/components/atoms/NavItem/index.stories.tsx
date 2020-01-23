import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from ".";

export default {
  title: "atoms/NavItems",
  decorators: [withKnobs]
};

export const index: React.FC = () => (
  <Router>
    <NavLink to="/">{text("content", "Home")}</NavLink>
  </Router>
);
