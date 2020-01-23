import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import LabelProgram from ".";
import { Typography, Paragraph } from "components";

export default {
  title: "atoms/LabelProgramContainer",
  decorators: [withKnobs]
};

export const labelProgram: React.FC = () => (
  <LabelProgram>
    <Typography color="secondary" styleType="h4">
      Friendship partners
    </Typography>
    <Paragraph color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna
      vitae eros vulputate mollis eget finibus elit. Quisque sed.
    </Paragraph>
  </LabelProgram>
);
