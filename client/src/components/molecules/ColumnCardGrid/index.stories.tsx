import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import ColumnCardGrid from ".";
import {
  COLUMN_CARD_TITLE,
  COLUMN_CARD_BODY,
  COLUMN_CARD_DATE
} from "commons/string";
import { note } from "commons/__types__";
import uuid4 from "uuid4";

export default {
  title: "molecules/ColumnCardGrid",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Column Direction Card"
  }
};

const notes: note[] = [
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    to: uuid4(),
    src: ""
  },
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    to: uuid4(),
    src: ""
  },
  {
    title: COLUMN_CARD_TITLE,
    body: COLUMN_CARD_BODY,
    date: COLUMN_CARD_DATE,
    to: uuid4(),
    src: ""
  }
];

export const index: React.FC = () => <ColumnCardGrid notes={notes} />;
