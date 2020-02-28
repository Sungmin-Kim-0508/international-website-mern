import React from "react";
import renderHTML from "react-render-html";
import * as Sc from "./style";
import { LabelDate, Typography } from "components";
import { News } from "commons/__types__";
import daysjs from "dayjs";

type RowDirectionCardProps = {
  /** Card Props */
  rowDirectionCard: News;
};

function RowDirectionCard({
  rowDirectionCard
}: RowDirectionCardProps): React.ReactElement {
  const { _id, title, creator, createdAt, description } = rowDirectionCard;
  return (
    <Sc.LinkWrapper to={`news/${_id}`}>
      <Sc.ContentWrapper>
        <Sc.TitleWrapper>
          <Typography styleType="h3" color="primary" textAlign="left">
            {title}
          </Typography>
        </Sc.TitleWrapper>
        <Typography
          styleType="h6"
          color="primary"
          isItalic={true}
          textAlign="right"
        >
          <span style={{ color: "#718093" }}>By</span> {creator.name}
        </Typography>
        <Sc.DescriptionWrapper>
          <Typography color="primary" styleType="h5" textAlign="left">
            {renderHTML(description).props.children[0].substring(0, 150)}
          </Typography>
        </Sc.DescriptionWrapper>
        <LabelDate color="gray">
          {daysjs(createdAt).format("MMMM DD, YYYY")}
        </LabelDate>
      </Sc.ContentWrapper>
    </Sc.LinkWrapper>
  );
}

export default RowDirectionCard;
