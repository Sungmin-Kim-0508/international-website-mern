import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ContactForm from ".";

export default {
  title: "molecules/ContactForm",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "ContactForm"
  }
};

export const contactCard: React.FC = () => <ContactForm />;
