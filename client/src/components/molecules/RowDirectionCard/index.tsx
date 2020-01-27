import React from "react";
import * as Sc from "./style";
import { Img, LabelDate, Typography } from "components";
import { rowDirectionCard } from "commons/__types__";

type RowDirectionCardProps = {
  /** Card Props */
  rowDirectionCard: rowDirectionCard;
};

function RowDirectionCard({
  rowDirectionCard
}: RowDirectionCardProps): React.ReactElement {
  const { alt = "img", src, to } = rowDirectionCard;
  return (
    <Sc.LinkWrapper to={to}>
      <Sc.ImgWrapper>
        <Img alt={alt} objectFit="cover" src={src} />
      </Sc.ImgWrapper>
      <Sc.ContentWrapper>
        <LabelDate color="gray">January 01, 2020</LabelDate>
        <Typography styleType="h4" color="primary">
          Give To End Childhood ilnesses
        </Typography>
        <Typography styleType="h6" color="primary" isItalic={true}>
          <span style={{ color: "#718093" }}>By</span> Stuart & Mary
        </Typography>
      </Sc.ContentWrapper>
    </Sc.LinkWrapper>
  );
}

export default RowDirectionCard;
