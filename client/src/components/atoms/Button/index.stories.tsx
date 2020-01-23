import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";
import StoryRouter from "storybook-react-router";
import Button from ".";

export default {
  title: "atoms/Button",
  decorators: [withKnobs, StoryRouter()],
  parameters: {
    componentSubtitle: "Basic Button Component"
  }
};

export const link: React.FC = () => (
  <Router>
    <Button theme="primary" to={text("to", "/signIn")}>
      {text("Router Link", "Read More")}
    </Button>
  </Router>
);

export const success: React.FC = () => (
  <Button theme="success" onClick={action("onClick")}>
    {text("content", "Button")}
  </Button>
);

export const danger: React.FC = () => (
  <Button theme="danger" onClick={action("onClick")}>
    {text("content", "Button")}
  </Button>
);

export const primary: React.FC = () => (
  <Button theme="primary" onClick={action("onClick")}>
    {text("content", "Button")}
  </Button>
);
