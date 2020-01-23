import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavBrand from ".";

export default {
  title: "atoms/NavBrand",
  decorators: [withKnobs, StoryRouter]
};

export const index: React.FC = () => (
  <Router>
    <NavBrand to="/">{text("content", "Home")}</NavBrand>
  </Router>
);
