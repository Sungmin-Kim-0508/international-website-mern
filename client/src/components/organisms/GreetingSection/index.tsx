import React from "react";
import * as Sc from "./style";
import { Typography, Img } from "components";

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
          Welcome
        </Typography>
        <Typography styleType="h1" color="secondary">
          International Students
        </Typography>
        <Typography styleType="h1" color="white">
          London, Ontario, Canada
        </Typography>
      </Sc.TypographyWrapper>
    </Sc.Container>
  );
}

export default GreetingSection;
