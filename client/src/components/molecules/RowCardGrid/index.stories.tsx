import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import RowCardGrid from ".";
import { cards } from "commons/__mock_json__";

export default {
  title: "molecules/RowCardGrid",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Row Card Grid Component"
  }
};

export const index: React.FC = () => <RowCardGrid cards={cards} />;
