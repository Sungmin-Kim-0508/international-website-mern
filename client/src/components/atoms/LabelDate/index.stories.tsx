import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import LabelDate from ".";

export default {
  title: "atoms/LabelDate",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Basic LabelDate Component"
  }
};

export const black: React.FC = () => (
  <div style={{ backgroundColor: "antiquewhite" }}>
    <LabelDate color="black">January 01th, 2020</LabelDate>
  </div>
);

export const gray: React.FC = () => (
  <div style={{ backgroundColor: "antiquewhite" }}>
    <LabelDate color="gray">January 01th, 2020</LabelDate>
  </div>
);
