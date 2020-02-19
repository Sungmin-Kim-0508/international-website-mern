import React from "react";
import { NewsDetail } from "components";
import { News } from "commons/__types__";

type NewsDetailTemplatesProps = {
  newsDetail: News;
};

function NewsDetailTemplates({
  newsDetail
}: NewsDetailTemplatesProps): React.ReactElement {
  return (
    <>
      <NewsDetail newsDetail={newsDetail} />
    </>
  );
}

export default NewsDetailTemplates;
