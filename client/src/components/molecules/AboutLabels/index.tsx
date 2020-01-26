import React from "react";
import * as Sc from "./style";
import {
  ABOUT_TITLE,
  ABOUT_PARAGRAPH1,
  ABOUT_PARAGRAPH2,
  STUART_MARY_SMITH
} from "commons/string";
import { Typography, Paragraph } from "components";

type AboutLabelsProps = {};

function AboutLabels({}: AboutLabelsProps): React.ReactElement {
  return (
    <Sc.Container>
      <Typography styleType="h2" isBold={true} color="primary">
        {ABOUT_TITLE}
      </Typography>
      <Paragraph color="gray" textAlign="left">
        {ABOUT_PARAGRAPH1}
      </Paragraph>
      <Paragraph color="gray" textAlign="left">
        {ABOUT_PARAGRAPH2}
      </Paragraph>
      <Typography styleType="h3" color="gray" textAlign="right">
        {STUART_MARY_SMITH}
      </Typography>
    </Sc.Container>
  );
}

export default AboutLabels;
