import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ProgramLabels from ".";
import { programLabels } from "commons/__types__";

export default {
  title: "molecules/ProgramLabels",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Program Labels Component"
  }
};

const label: programLabels = {
  title: "Friendship Partner",
  content:
    "connecting interested individuals, couples and families with international students who would like a Canadian friend. This involves hospitality in sharing some meals together during the year, possibly inviting students to share in special cultural events and festivals, and English conversation practice."
};

export const index: React.FC = () => (
  <div style={{ backgroundColor: "gray  " }}>
    <ProgramLabels label={label} />;
  </div>
);
