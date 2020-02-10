import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NewsSection from ".";
import { cards } from "commons/__mock_json__";
import { NewsState } from "commons/__types__";

export default {
  title: "organisms/NewsSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "News Section in Home Page"
  }
};

const news: NewsState = {
  news: {
    docs: [
      {
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
          name: "Kim",
          email: "",
          googleId: 0,
          avatarUrl: "",
          register_date: new Date()
        }
      },
      {
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
          name: "Kim",
          email: "",
          googleId: 0,
          avatarUrl: "",
          register_date: new Date()
        }
      },
      {
        views: 0,
        createdAt: new Date(),
        newsComments: [],
        _id: "5e3f1577e0e6230ae0250116",
        title: "Eat your breakfast",
        description: "<p>Time is up</p>",
        creator: {
          admin: true,
          newsComments: [],
          news: [],
          studentFiles: [],
          volunteerFiles: [],
          _id: "5d658167db1a70152c17f486",
          name: "Kim Eddie",
          email: "",
          googleId: 0,
          avatarUrl: "",
          register_date: new Date()
        }
      }
    ],
    totalDocs: 12,
    limit: 3,
    hasPrevPage: false,
    hasNextPage: true,
    prevPage: null,
    nextPage: 2,
    page: 1,
    totalPages: 4,
    pagingCounter: 1,
    meta: {},
    offset: 0
  },
  newsDetail: "",
  msg: ""
};

export const index: React.FC = () => <NewsSection cards={news} />;
