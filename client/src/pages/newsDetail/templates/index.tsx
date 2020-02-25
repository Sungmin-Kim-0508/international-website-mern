import React from "react";
import { NewsDetail } from "components";
import { News } from "commons/__types__";

type NewsDetailTemplatesProps = {
  newsDetail: News;
  isEdit?: boolean;
  onEdit?: () => void;
  onDelete: () => void;
  onBack: () => void;
};

function NewsDetailTemplates({
  newsDetail,
  onEdit,
  onDelete,
  onBack
}: NewsDetailTemplatesProps): React.ReactElement {
  return (
    <>
      <NewsDetail
        newsDetail={newsDetail}
        onEdit={onEdit}
        onDelete={onDelete}
        onBack={onBack}
      />
    </>
  );
}

export default NewsDetailTemplates;
