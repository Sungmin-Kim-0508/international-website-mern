import React from "react";
import * as Sc from "./style";
import { Typography, ProgramGrid } from "components";
import { programLabels } from "commons/__types__";

type ProgramSectionProps = {
  programLabels: programLabels[];
};

function ProgramSection({
  programLabels
}: ProgramSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1" color="white">
          Our Program Includes...
        </Typography>
      </Sc.TitleWrapper>
      <Sc.ProgramGridWrapper>
        <ProgramGrid programLabels={programLabels} />
      </Sc.ProgramGridWrapper>
    </Sc.Container>
  );
}

export default ProgramSection;
