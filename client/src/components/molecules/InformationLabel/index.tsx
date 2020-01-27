import React from "react";
import * as Sc from "./style";
import { Typography, LabelDate } from "components";
import { information } from "commons/__types__";

function InformationLables({ title, date }: information): React.ReactElement {
  return (
    <Sc.Container>
      <Typography styleType="h3" color="primary">
        {title}
      </Typography>
      <LabelDate color="black">{date}</LabelDate>
    </Sc.Container>
  );
}

export default InformationLables;
