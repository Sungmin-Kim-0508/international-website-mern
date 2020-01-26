import React from "react";
import * as Sc from "./style";
import { ProgramLabels } from "components";
import { programLabels } from "commons/__types__";

type ProgramGridProps = {
  labels: programLabels[];
};

function ProgramGrid({ labels }: ProgramGridProps): React.ReactElement {
  return (
    <Sc.Container>
      {labels.map(label => (
        <ProgramLabels label={label} />
      ))}
    </Sc.Container>
  );
}

export default ProgramGrid;
