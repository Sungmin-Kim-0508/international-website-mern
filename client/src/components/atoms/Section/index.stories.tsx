import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Section from ".";

export default {
  title: "atoms/Section",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      "Basic Section Component that decides width, height and padding"
  }
};

export const halfWidth: React.FC = () => (
  <Section isHalfWidth={boolean("isHalfWidth", true)}>
    <div style={{ backgroundColor: "aqua", height: "530px" }}>Left</div>
    <div style={{ backgroundColor: "yellow", height: "530px" }}>Right</div>
  </Section>
);

export const index: React.FC = () => (
  <Section
    sidePadding={text("Left-Right Padding", "100px")}
    topBottomPadding={text("Top-Bottom Padding", "50px")}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque nostrum
    tenetur temporibus modi, facere est obcaecati ipsum sint laudantium ea
    recusandae enim. Modi perspiciatis veritatis odit soluta itaque. Doloribus.
  </Section>
);
