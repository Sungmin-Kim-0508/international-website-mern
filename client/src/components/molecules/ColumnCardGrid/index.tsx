import React from "react";
import * as Sc from "./style";
import { ColumnDirectionCard } from "components";
import { note } from "commons/__types__";

type ColumnCardGridProps = {
  to: string;
  notes: note[];
};

function ColumnCardGrid({
  to,
  notes
}: ColumnCardGridProps): React.ReactElement {
  return (
    <Sc.Container>
      {notes.map(note => (
        <ColumnDirectionCard to={to} note={note} />
      ))}
    </Sc.Container>
  );
}

export default ColumnCardGrid;
