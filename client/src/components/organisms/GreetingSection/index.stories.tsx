import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import GreetingSection from ".";

export default {
  title: "organisms/GreetingSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Greeting Section"
  }
};

export const index: React.FC = () => <GreetingSection />;
