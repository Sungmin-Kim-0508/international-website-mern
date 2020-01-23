import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ContactLabelBlock from "../ContactLabelBlock";

export default {
  title: "molecules/ContactLabelBlock",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Contact Label collected Input component"
  }
};

export const index: React.FC = () => <ContactLabelBlock />;
