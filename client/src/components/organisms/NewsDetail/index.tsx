import React from "react";
import * as Sc from "./style";
import { NewsDetailTitle, Paragraph } from "components";
import { News } from "commons/__types__";
import renderHTML from "react-render-html";

type NewsDetailProps = {
  newsDetail: News;
};

function NewsDetail({ newsDetail }: NewsDetailProps): React.ReactElement {
  const {
    description,
    title,
    creator: { name },
    createdAt
  } = newsDetail;
  return (
    <Sc.Container>
      <NewsDetailTitle title={title} creatorName={name} createdAt={createdAt} />
      <Paragraph color="black">{renderHTML(description)}</Paragraph>
    </Sc.Container>
  );
}

export default NewsDetail;
