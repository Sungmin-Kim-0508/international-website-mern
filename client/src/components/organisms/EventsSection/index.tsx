import React from "react";
import * as Sc from "./style";
import { Img } from "components";
import { note } from "commons/__types__";
import { UPCOMING_EVENT } from "commons/string";
import { ColumnCardGrid, Typography } from "components";

type EventsSectionProps = {
  to: string;
  notes: note[];
};

function EventsSection({ to, notes }: EventsSectionProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.ImgWrapper>
        <Img
          src={`${process.env.PUBLIC_URL}/img/focus_dinner.jpg`}
          alt="events"
          objectFit="cover"
        />
      </Sc.ImgWrapper>
      <Sc.TitleWrapper>
        <Typography styleType="h2" isBold={true} color="primary">
          {UPCOMING_EVENT}
        </Typography>
      </Sc.TitleWrapper>
      <Sc.CardGridWrapper>
        <ColumnCardGrid to={to} notes={notes} />
      </Sc.CardGridWrapper>
    </Sc.Container>
  );
}

export default EventsSection;
