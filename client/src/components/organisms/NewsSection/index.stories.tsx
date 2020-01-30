import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NewsSection from ".";
import { cards } from "commons/__mock_json__";

export default {
  title: "organisms/NewsSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "News Section in Home Page"
  }
};

export const index: React.FC = () => <NewsSection cards={cards} />;
