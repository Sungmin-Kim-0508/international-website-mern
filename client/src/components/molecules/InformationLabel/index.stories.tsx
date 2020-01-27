import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InformationLabels from ".";
import { information } from "commons/__types__";

export default {
  title: "molecules/InformationLabels",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Information Labels"
  }
};

const info = {
  title: "ISMC Guide Book for New Comer",
  date: "January 01th, 2020"
};

const { title, date } = info;

export const index: React.FC = () => (
  <InformationLabels title={title} date={date} />
);
