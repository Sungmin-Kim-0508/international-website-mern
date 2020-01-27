import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InformationSection from ".";

export default {
  title: "organisms/InformationSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Information Section"
  }
};

const stuInfos = [
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  },
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  },
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  }
];

const voluInfos = [
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  },
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  },
  {
    title: "ISMC Guide Book for New Comer",
    date: "January 01th, 2020"
  }
];

export const index: React.FC = () => (
  <InformationSection stuInfos={stuInfos} voluInfos={voluInfos} />
);
