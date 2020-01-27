import React from "react";
import * as Sc from "./style";
import { InformationLabel } from "components";
import { information } from "commons/__types__";

type InformationLabelListProps = {
  infos: information[];
};

function InformationLabelList({
  infos
}: InformationLabelListProps): React.ReactElement {
  return (
    <Sc.Container>
      {infos.map(info => (
        <InformationLabel title={info.title} date={info.date} />
      ))}
    </Sc.Container>
  );
}

export default InformationLabelList;
