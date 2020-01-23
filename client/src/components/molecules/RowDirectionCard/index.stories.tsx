import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from "react-router-dom";
import RowDirectionCard from ".";

export default {
  title: "molecules/RowDirectionCard",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Column Direction Card"
  }
};

export const index: React.FC = () => (
  <Router>
    <RowDirectionCard to={text("to", "/signIn")} />
  </Router>
);
