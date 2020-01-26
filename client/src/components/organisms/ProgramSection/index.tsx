import React from "react";
import * as Sc from "./style";
import { Typography, ProgramGrid } from "components";
import { programLabels } from "commons/__types__";

type ProgramSectionProps = {
  labels: programLabels[];
};

function ProgramSection({ labels }: ProgramSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1" color="white">
          Our Program Includes...
        </Typography>
      </Sc.TitleWrapper>
      <Sc.ProgramGridWrapper>
        <ProgramGrid labels={labels} />
      </Sc.ProgramGridWrapper>
    </Sc.Container>
  );
}

export default ProgramSection;
