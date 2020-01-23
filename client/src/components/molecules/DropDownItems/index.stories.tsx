import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Dropdown from "../DropDownItems";

export default {
  title: "molecules/Dropdown",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Dropdown List Component"
  }
};

/** Dropdown List Component */
export const dropDown: React.FC = () => (
  <ul className="nav nav-tabs">
    <Dropdown dropdownItems={["For Students", "For Volunteers"]} />
  </ul>
);
