import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ContactLabels from "../ContactLabels";

export default {
  title: "molecules/ContactLabels",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Contact Label collected Input component"
  }
};

export const index: React.FC = () => (
  <ContactLabels
    note={{
      title: text("title", "Contact Number"),
      content: text("content", "+1 123 123 1234")
    }}
  />
);
