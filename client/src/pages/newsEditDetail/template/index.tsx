import React from "react";
import ReactQuill from "react-quill";
import { News } from "commons/__types__";
import { NewsDetail } from "components";

type NewsEditDetailTemplateProps = {
  newsDetail: News;
  isEdit?: boolean;
  titleRef: React.RefObject<HTMLInputElement>;
  editorRef: React.RefObject<ReactQuill>;
  onBack: () => void;
  onEditorChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLElement>) => void;
};

function NewsEditDetailTemplate({
  newsDetail,
  isEdit,
  titleRef,
  editorRef,
  onBack,
  onEditorChange,
  onSubmit
}: NewsEditDetailTemplateProps): React.ReactElement {
  return (
    <form onSubmit={onSubmit}>
      <NewsDetail
        newsDetail={newsDetail}
        isEdit={isEdit}
        titleRef={titleRef}
        editorRef={editorRef}
        onBack={onBack}
        onEditorChange={onEditorChange}
      />
    </form>
  );
}

export default NewsEditDetailTemplate;
