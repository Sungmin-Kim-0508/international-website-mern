import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import RowCardGrid from ".";
import { rowDirectionCard } from "commons/__types__";

export default {
  title: "molecules/RowCardGrid",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Row Card Grid Component"
  }
};

const cards: rowDirectionCard[] = [
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: "/sdfui29jr234rs0gsd21fwej12"
  },
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: "/sdfui29jr234rs0gsd21fwej12"
  },
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: "/sdfui29jr234rs0gsd21fwej12"
  }
];

export const index: React.FC = () => <RowCardGrid cards={cards} />;
