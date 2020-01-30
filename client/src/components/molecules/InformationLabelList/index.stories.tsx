import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InformationLabelsList from ".";
import { stuInfos } from "commons/__mock_json__";

export default {
  title: "molecules/InformationLabelsList",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Information Labels List Component"
  }
};

export const index: React.FC = () => <InformationLabelsList infos={stuInfos} />;
