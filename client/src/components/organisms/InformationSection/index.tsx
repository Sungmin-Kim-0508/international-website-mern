import React from "react";
import * as Sc from "./style";
import { InformationLabelList, Typography } from "components";
import { information } from "commons/__types__";
import { INFORMATION, FORSTUDENTS, FORVOLUNTEER } from "commons/string";

type InformationSectionProps = {
  stuInfos: information[];
  voluInfos: information[];
};

function InformationSection({
  stuInfos,
  voluInfos
}: InformationSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1" color="white" textAlign="center">
          {INFORMATION}
        </Typography>
      </Sc.TitleWrapper>
      <Sc.ContentWrapper>
        <Sc.BoxWrapper>
          <Typography styleType="h2" color="white" textAlign="center">
            {FORSTUDENTS}
          </Typography>
          <InformationLabelList infos={stuInfos} />
        </Sc.BoxWrapper>
        <Sc.BoxWrapper>
          <Typography styleType="h2" color="white" textAlign="center">
            {FORVOLUNTEER}
          </Typography>
          <InformationLabelList infos={voluInfos} />
        </Sc.BoxWrapper>
      </Sc.ContentWrapper>
    </Sc.Container>
  );
}

export default InformationSection;
