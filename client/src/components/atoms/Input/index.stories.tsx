import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Input from ".";

export default {
  title: "atoms/Input",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Basic Input Component"
  }
};

export const index: React.FC = () => <Input placeholder="Enter Your Name" />;
