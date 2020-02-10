import React from "react";
import * as Sc from "./style";
import { InformationLabel } from "components";
import { information } from "commons/__types__";
import uuid4 from "uuid4";

type InformationLabelListProps = {
  infos: information[];
};

function InformationLabelList({
  infos
}: InformationLabelListProps): React.ReactElement {
  return (
    <Sc.Container>
      {infos.map(info => (
        <InformationLabel key={uuid4()} title={info.title} date={info.date} />
      ))}
    </Sc.Container>
  );
}

export default InformationLabelList;
