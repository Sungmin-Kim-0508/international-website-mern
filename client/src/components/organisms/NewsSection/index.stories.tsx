import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NewsSection from ".";
import { rowDirectionCard } from "commons/__types__";

export default {
  title: "organisms/NewsSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "News Section in Home Page"
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

export const index: React.FC = () => <NewsSection cards={cards} />;
