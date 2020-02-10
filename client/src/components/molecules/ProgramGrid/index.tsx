import React from "react";
import * as Sc from "./style";
import { ProgramLabels } from "components";
import { programLabels } from "commons/__types__";
import uuid4 from "uuid4";

type ProgramGridProps = {
  programLabels: programLabels[];
};

function ProgramGrid({ programLabels }: ProgramGridProps): React.ReactElement {
  return (
    <Sc.Container>
      {programLabels.map(programLabel => (
        <ProgramLabels key={uuid4()} programLabel={programLabel} />
      ))}
    </Sc.Container>
  );
}

export default ProgramGrid;
