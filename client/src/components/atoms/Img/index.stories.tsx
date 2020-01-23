import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Img from ".";

export default {
  title: "atoms/Img",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Basic Img Component"
  }
};

const divStyle = {
  width: "200px",
  height: "300px",
  backgroundColor: "aqua"
};

export const index: React.FC = () => (
  <div style={divStyle}>
    <Img
      src={text("src", "")}
      alt={text("alt", "img")}
      objectFit={text("object-fit", "none")}
    />
  </div>
);
