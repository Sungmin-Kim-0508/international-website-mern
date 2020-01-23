import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ContactInputs from "../ContactInputs";

export default {
  title: "molecules/ContactInputs",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Contact Inputs collected Input component"
  }
};

export const index: React.FC = () => <ContactInputs />;
