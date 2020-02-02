import React from "react";
import * as Sc from "./style";
import {
  WELCOME,
  INTERNATIONAL_STUDENTS,
  SECTION1_PARAGRAPH,
  LOCATION
} from "commons/string";
import { Typography, Paragraph } from "components";

function GreetingSection(): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.ContentWrapper>
        <Sc.TypographyWrapper>
          <Typography styleType="h1" color="white">
            {WELCOME}
          </Typography>
          <Typography styleType="h1" color="secondary" textAlign="center">
            {INTERNATIONAL_STUDENTS}
          </Typography>
          <Typography styleType="h2" color="white" textAlign="center">
            {LOCATION}
          </Typography>
        </Sc.TypographyWrapper>
        <Sc.ParagraphWrapper>
          <Paragraph color="white">{SECTION1_PARAGRAPH}</Paragraph>
        </Sc.ParagraphWrapper>
      </Sc.ContentWrapper>
    </Sc.Container>
  );
}

export default GreetingSection;
