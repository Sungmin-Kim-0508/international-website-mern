import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ContactSection from ".";

export default {
  title: "organisms/ContactSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Contact Section"
  }
};

export const contactSection: React.FC = () => <ContactSection />;
