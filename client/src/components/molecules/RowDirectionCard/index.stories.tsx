import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import RowDirectionCard from ".";
import { rowDirectionCard } from "commons/__types__";

export default {
  title: "molecules/RowDirectionCard",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Column Direction Card"
  }
};

const card: rowDirectionCard = {
  src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
  alt: "focus_dinner",
  to: "/sdfui29jr234rs0gsd21fwej12"
};

export const index: React.FC = () => {
  return <RowDirectionCard rowDirectionCard={card} />;
};
