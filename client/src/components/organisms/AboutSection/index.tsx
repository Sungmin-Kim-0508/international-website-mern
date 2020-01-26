import React from "react";
import * as Sc from "./style";
import { Img, AboutLabels } from "components";

type AboutSectionProps = {};

function AboutSection({}: AboutSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.ImgWrapper>
        <Img
          src={`${process.env.PUBLIC_URL}/img/james-baldwin-b9vkGONY4eI-unsplash.jpg`}
          alt="about"
          objectFit="cover"
        />
      </Sc.ImgWrapper>
      <Sc.LabelsWrapper>
        <AboutLabels />
      </Sc.LabelsWrapper>
    </Sc.Container>
  );
}

export default AboutSection;
