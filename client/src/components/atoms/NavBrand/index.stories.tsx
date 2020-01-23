import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import NavBrand from ".";

export default {
  title: "atoms/NavBrand",
  decorators: [withKnobs, StoryRouter]
};

export const index: React.FC = () => (
  <NavBrand to="/">{text("content", "Home")}</NavBrand>
);
