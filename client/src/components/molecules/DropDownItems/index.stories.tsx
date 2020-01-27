import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Dropdown from ".";

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
    <Dropdown
      dropdownMenuLabel={text("Dropdown Label", "Resource")}
      dropdownItems={[
        {
          navName: text("dropdown1", "For Students"),
          to: text("to1", "/forStudents")
        },
        {
          navName: text("dropdown2", "For Volunteers"),
          to: text("to2", "/forVolunteers")
        }
      ]}
    />
  </ul>
);
