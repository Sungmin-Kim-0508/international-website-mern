import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import EventsSection from ".";
import {
  COLUMN_CARD_TITLE,
  COLUMN_CARD_LOCATION,
  COLUMN_CARD_DATE,
  COLUMN_CARD_BODY
} from "commons/string";
import { note } from "commons/__types__";

export default {
  title: "organisms/EventsSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Event Section"
  }
};

const notes: note[] = [
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    src: ""
  },
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    src: ""
  },
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    src: ""
  }
];

export const eventsSection: React.FC = () => (
  <EventsSection to="/about" notes={notes} />
);
