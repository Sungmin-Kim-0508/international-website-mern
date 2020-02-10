import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ProgramGrid from ".";
import { labels } from "commons/__mock_json__";

export default {
  title: "molecules/ProgramGrid",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Program Labels Component"
  }
};

export const index: React.FC = () => (
  <div style={{ backgroundColor: "gray" }}>
    <ProgramGrid programLabels={labels} />;
  </div>
);
