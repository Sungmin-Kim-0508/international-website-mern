import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InformationLabelsList from ".";
import { information } from "commons/__types__";

export default {
  title: "molecules/InformationLabelsList",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Information Labels List Component"
  }
};

const infos: information[] = [
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

export const index: React.FC = () => <InformationLabelsList infos={infos} />;
