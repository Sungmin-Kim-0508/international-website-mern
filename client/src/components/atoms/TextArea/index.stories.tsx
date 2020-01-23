import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import TextArea from ".";

export default {
  title: "atoms/TextArea",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Basic TextArea Component"
  }
};

const content: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna vitae eros vulputate mollis eget finibus elit. Quisque sed.";

export const index: React.FC = () => (
  <TextArea>{text("content", content)}</TextArea>
);
