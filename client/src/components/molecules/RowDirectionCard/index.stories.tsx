import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import RowDirectionCard from ".";
import { News } from "commons/__types__";

export default {
  title: "molecules/RowDirectionCard",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Column Direction Card"
  }
};

const card: News = {
  views: 0,
  createdAt: new Date(),
  newsComments: [],
  _id: "",
  title: "Eat your breakfast",
  description: "<p>Time is up</p>",
  creator: {
    admin: true,
    newsComments: [],
    news: [],
    studentFiles: [],
    volunteerFiles: [],
    _id: "",
    name: "Kim Eddie",
    email: "",
    googleId: 0,
    avatarUrl: "",
    register_date: new Date()
  }
};

export const index: React.FC = () => {
  return <RowDirectionCard rowDirectionCard={card} />;
};
