import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import HomeTemplates from ".";
import {
  cards,
  labels,
  stuInfos,
  voluInfos,
  notes
} from "commons/__mock_json__";

export default {
  title: "templates/Home",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Home Templates"
  }
};

export const index: React.FC = () => (
  <HomeTemplates
    cards={cards}
    labels={labels}
    stuInfos={stuInfos}
    voluInfos={voluInfos}
    notes={notes}
  />
);
