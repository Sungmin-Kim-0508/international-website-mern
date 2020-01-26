import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import AboutSection from ".";

export default {
  title: "organisms/AboutSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "About Section"
  }
};

export const index: React.FC = () => <AboutSection />;
