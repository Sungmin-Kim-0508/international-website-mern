import {
  information,
  note,
  programLabels,
  rowDirectionCard
} from "commons/__types__";
import {
  COLUMN_CARD_TITLE,
  COLUMN_CARD_DATE,
  COLUMN_CARD_BODY
} from "commons/string";
import uuid4 from "uuid4";

export const stuInfos: information[] = [
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

export const voluInfos: information[] = [
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

export const notes: note[] = [
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

export const cards: rowDirectionCard[] = [
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: uuid4()
  },
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: uuid4()
  },
  {
    src: `${process.env.PUBLIC_URL}/img/focus_dinner.jpg`,
    alt: "focus_dinner",
    to: uuid4()
  }
];

export const labels: programLabels[] = [
  {
    title: "Friendship Partner",
    content:
      "connecting interested individuals, couples and families with international students who would like a Canadian friend. This involves hospitality in sharing some meals together during the year, possibly inviting students to share in special cultural events and festivals, and English conversation practice."
  },
  {
    title: "Friendship Partner",
    content:
      "connecting interested individuals, couples and families with international students who would like a Canadian friend. This involves hospitality in sharing some meals together during the year, possibly inviting students to share in special cultural events and festivals, and English conversation practice."
  },
  {
    title: "Friendship Partner",
    content:
      "connecting interested individuals, couples and families with international students who would like a Canadian friend. This involves hospitality in sharing some meals together during the year, possibly inviting students to share in special cultural events and festivals, and English conversation practice."
  }
];
