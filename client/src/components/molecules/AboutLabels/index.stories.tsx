import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import AboutLabels from ".";

export default {
  title: "molecules/AboutLabels",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "About Labels Card"
  }
};

export const index: React.FC = () => <AboutLabels />;
