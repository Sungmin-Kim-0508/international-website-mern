import React from "react";
import * as Sc from "./style";
import { NewsDetail, Button } from "components";
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
    <Sc.Container>
      <Sc.NewsDetailWrapper>
        <NewsDetail
          newsDetail={newsDetail}
          onEdit={onEdit}
          onDelete={onDelete}
          onBack={onBack}
        />
      </Sc.NewsDetailWrapper>
      <Sc.ButtonWrapper>
        <Button theme="gray" onClick={onBack}>
          Back
        </Button>
      </Sc.ButtonWrapper>
    </Sc.Container>
  );
}

export default NewsDetailTemplates;
