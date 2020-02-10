import React from "react";
import * as Sc from "./style";
import { Typography, Paragraph } from "components";
import { programLabels } from "commons/__types__";

type ProgramLabelsProps = {
  programLabel: programLabels;
};

function ProgramLabels({
  programLabel
}: ProgramLabelsProps): React.ReactElement {
  const { title, content } = programLabel;
  return (
    <Sc.Container>
      <Typography styleType="h4" color="secondary">
        {title}
      </Typography>
      <Paragraph color="white" textAlign="left">
        {content}
      </Paragraph>
    </Sc.Container>
  );
}

export default ProgramLabels;
