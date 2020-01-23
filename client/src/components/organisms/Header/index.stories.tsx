import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Header from ".";

export default {
  title: "organisms/Header",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Navigation Bar"
  }
};

export const index: React.FC = () => <Header />;
