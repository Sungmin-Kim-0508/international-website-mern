import React from "react";
import * as Sc from "./style";
import { Img, LabelDate, Typography } from "components";
import { News } from "commons/__types__";
import daysjs from "dayjs";

type RowDirectionCardProps = {
  /** Card Props */
  rowDirectionCard: News;
};

function RowDirectionCard({
  rowDirectionCard
}: RowDirectionCardProps): React.ReactElement {
  const { _id, title, creator, createdAt } = rowDirectionCard;
  return (
    <Sc.LinkWrapper to={`news/${_id}`}>
      <Sc.ImgWrapper>
        <Img
          alt="img"
          objectFit="cover"
          src={`${process.env.PUBLIC_URL}/img/focus_dinner.jpg`}
        />
      </Sc.ImgWrapper>
      <Sc.ContentWrapper>
        <LabelDate color="gray">
          {daysjs(createdAt).format("MMMM DD, YYYY")}
        </LabelDate>
        <Typography styleType="h4" color="primary" textAlign="center">
          {title}
        </Typography>
        <Typography
          styleType="h6"
          color="primary"
          isItalic={true}
          textAlign="right"
        >
          <span style={{ color: "#718093" }}>By</span> {creator.name}
        </Typography>
      </Sc.ContentWrapper>
    </Sc.LinkWrapper>
  );
}

export default RowDirectionCard;
