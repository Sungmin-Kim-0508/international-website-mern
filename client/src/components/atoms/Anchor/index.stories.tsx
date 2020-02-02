import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Anchor from ".";

export default {
  title: "atoms/Anchor",
  decorators: [withKnobs, StoryRouter()],
  parameters: {
    componentSubtitle: "Basic Anchor Component"
  }
};

export const index: React.FC = () => (
  <Anchor to="/home">{text("text", "Upcoming Events")}</Anchor>
);
