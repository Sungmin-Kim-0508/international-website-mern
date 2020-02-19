import React from "react";
import * as Sc from "./style";
import routes from "commons/__routes__";
import { Typography, LabelDate, Anchor } from "components";
import { EDIT, DELETE } from "commons/string";
import dayjs from "dayjs";

type NewsDetailTitleProps = {
  title: string;
  creatorName: string;
  createdAt: Date;
};

function NewsDetailTitle({
  title,
  creatorName,
  createdAt
}: NewsDetailTitleProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.MainTitleWrapper>
        <Typography styleType="h1">{title}</Typography>
      </Sc.MainTitleWrapper>
      <Sc.SubTitleWrapper>
        <Sc.NameDateWarpper>
          <Typography styleType="h4">{creatorName}</Typography>
          <LabelDate color="black">
            {dayjs(createdAt).format("MMMM DD, YYYY")}
          </LabelDate>
        </Sc.NameDateWarpper>
        <Sc.ButtonsWarpper>
          <Anchor to={`${routes.news}/:id${routes.newsEdit}`} color="success">
            {EDIT}
          </Anchor>
          <Anchor to={`${routes.news}/:id${routes.newsDelete}`} color="danger">
            {DELETE}
          </Anchor>
        </Sc.ButtonsWarpper>
      </Sc.SubTitleWrapper>
    </Sc.Container>
  );
}

export default NewsDetailTitle;
