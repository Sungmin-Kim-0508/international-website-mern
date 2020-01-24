import React from "react";
import * as Sc from "./style";
import {
  WELCOME,
  INTERNATIONAL_STUDENTS,
  SECTION1_PARAGRAPH,
  LOCATION
} from "commons/string";
import { Typography, Img, Paragraph } from "components";

function GreetingSection(): React.ReactElement {
  const bgImg = `${process.env.PUBLIC_URL}/img/papaioannou-kostas-tysecUm5HJA-unsplash.jpg`;

  return (
    <Sc.Container>
      <Sc.ImgWrapper>
        <Img
          src={bgImg}
          objectFit="cover"
          alt="papaioannou-kostas-tysecUm5HJA-unsplash.jpg"
        />
      </Sc.ImgWrapper>
      <Sc.TypographyWrapper>
        <Typography styleType="h1" color="white">
          {WELCOME}
        </Typography>
        <Typography styleType="h2" color="secondary">
          {INTERNATIONAL_STUDENTS}
        </Typography>
        <Typography styleType="h3" color="white">
          {LOCATION}
        </Typography>
      </Sc.TypographyWrapper>
      <Sc.ParagraphWrapper>
        <Paragraph color="white">{SECTION1_PARAGRAPH}</Paragraph>
      </Sc.ParagraphWrapper>
    </Sc.Container>
  );
}

export default GreetingSection;
