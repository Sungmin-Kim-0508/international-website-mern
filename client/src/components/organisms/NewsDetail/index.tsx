import React from "react";
import ReactQuill from "react-quill";
import * as Sc from "./style";
import { NewsDetailTitle, NewsDetailDescription } from "components";
import { News } from "commons/__types__";

type NewsDetailProps = {
  newsDetail: News;
  isEdit?: boolean;
  titleRef?: React.RefObject<HTMLInputElement>;
  editorRef?: React.RefObject<ReactQuill>;
  onEdit?: () => void;
  onDelete?: () => void;
  onBack?: () => void;
  onEditorChange?: (value: string) => void;
};

function NewsDetail({
  newsDetail,
  isEdit,
  titleRef,
  editorRef,
  onEdit,
  onDelete,
  onBack,
  onEditorChange
}: NewsDetailProps): React.ReactElement {
  const {
    description,
    title,
    creator: { name },
    createdAt
  } = newsDetail;
  return (
    <Sc.Container>
      <NewsDetailTitle
        title={title}
        creatorName={name}
        createdAt={createdAt}
        isEdit={isEdit}
        titleRef={titleRef}
        onEdit={onEdit}
        onDelete={onDelete}
        onBack={onBack}
      />
      <NewsDetailDescription
        description={description}
        isEdit={isEdit}
        editorRef={editorRef}
        onEditorChange={onEditorChange}
        onBack={onBack}
      />
    </Sc.Container>
  );
}

export default NewsDetail;
