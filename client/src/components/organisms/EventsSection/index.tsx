import React from "react";
import * as Sc from "./style";
import { note } from "commons/__types__";
import { UPCOMING_EVENT } from "commons/string";
import { ColumnCardGrid, Typography, Anchor } from "components";

interface EventsSectionProps {
  notes: note[];
}

function EventsSection({ notes }: EventsSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h2" color="white">
          <Anchor to="/events" color="white">
            {UPCOMING_EVENT}
          </Anchor>
        </Typography>
      </Sc.TitleWrapper>
      <Sc.CardGridWrapper>
        <ColumnCardGrid notes={notes} />
      </Sc.CardGridWrapper>
    </Sc.Container>
  );
}

export default EventsSection;
