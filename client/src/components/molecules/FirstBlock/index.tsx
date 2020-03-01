import React from "react";
import * as Sc from "./style";
import { Typography } from "components";

type FirstBlockProps = {
  TITLE: string;
  SUBTITLE: string;
  DESC: string;
};

function FirstBlock({
  TITLE,
  SUBTITLE,
  DESC
}: FirstBlockProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1">{TITLE}</Typography>
      </Sc.TitleWrapper>
      <Sc.SubTitleWrapper>{SUBTITLE}</Sc.SubTitleWrapper>
      <Sc.DescriptionWrapper>{DESC}</Sc.DescriptionWrapper>
    </Sc.Container>
  );
}

export default FirstBlock;
