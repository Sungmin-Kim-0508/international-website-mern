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
import { useSelector } from "react-redux";
import { RootState } from "rootReducer";

export default {
  title: "templates/Home",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Home Templates"
  }
};

export const index: React.FC = () => {
  const { home } = useSelector((state: RootState) => state);

  return (
    <HomeTemplates
      cards={home.news}
      programLabels={labels}
      stuInfos={stuInfos}
      voluInfos={voluInfos}
      notes={notes}
    />
  );
};
