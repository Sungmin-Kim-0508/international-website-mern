import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Paragraph from ".";

export default {
  title: "atoms/Paragraph",
  decorators: [withKnobs]
};

const content: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna vitae eros vulputate mollis eget finibus elit. Quisque sed.";

export const gray: React.FC = () => (
  <Paragraph color={text("color", "gray")}>
    {text("content", content)}
  </Paragraph>
);

export const index: React.FC = () => (
  <Paragraph color={text("color", "black")}>
    {text("content", content)}
  </Paragraph>
);
