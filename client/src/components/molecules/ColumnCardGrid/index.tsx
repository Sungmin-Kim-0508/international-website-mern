import React from "react";
import * as Sc from "./style";
import { ColumnDirectionCard } from "components";
import { note } from "commons/__types__";

type ColumnCardGridProps = {
  notes: note[];
};

function ColumnCardGrid({ notes }: ColumnCardGridProps): React.ReactElement {
  return (
    <Sc.Container>
      {notes.map(note => (
        <ColumnDirectionCard note={note} />
      ))}
    </Sc.Container>
  );
}

export default ColumnCardGrid;
