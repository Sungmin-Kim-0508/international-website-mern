import React from "react";
import * as Sc from "./style";
import { Button, LabelDate, Paragraph, Typography, Img } from "components";

type ColumnDirectionCardProps = {
  /** Redirect to other route of the object of react-router-dom */
  to?: string;
  /** Title, Date, Body, Image Src */
  note: { title: string; date: string; body: string; src: string };
};

function ColumnDirectionCard({
  to,
  note
}: ColumnDirectionCardProps): React.ReactElement {
  const { title, date, body, src } = note;
  return (
    <Sc.Container>
      <Sc.ImgWrapper>
        <Img src={src} alt={title} objectFit="fill" />
      </Sc.ImgWrapper>
      <Sc.ContentWrapper>
        <Sc.TypographyWrapper>
          <Typography styleType="h4" color="primary">
            {title}
          </Typography>
        </Sc.TypographyWrapper>
        <Sc.DateWrapper>
          <LabelDate color="gray">{date}</LabelDate>
        </Sc.DateWrapper>
        <Sc.ParagraphWrapper>
          <Paragraph color="gray">{body}</Paragraph>
        </Sc.ParagraphWrapper>
        <Button theme="primary" to={to}>
          Read More
        </Button>
      </Sc.ContentWrapper>
    </Sc.Container>
  );
}

export default ColumnDirectionCard;
