import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { stuInfos, voluInfos } from "commons/__mock_json__";
import InformationSection from ".";

export default {
  title: "organisms/InformationSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Information Section"
  }
};

export const index: React.FC = () => (
  <InformationSection stuInfos={stuInfos} voluInfos={voluInfos} />
);
