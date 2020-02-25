import React from "react";
import ReactQuill from "react-quill";
import { NewsCreate } from "components";

type NewsCreateTemplateProps = {
  titleRef: React.RefObject<HTMLInputElement>;
  editorRef: React.RefObject<ReactQuill>;
  onSubmit: (e: React.FormEvent<HTMLElement>) => void;
  onBack: () => void;
};

function NewsCreateTemplate({
  titleRef,
  editorRef,
  onSubmit,
  onBack
}: NewsCreateTemplateProps): React.ReactElement {
  return (
    <form onSubmit={onSubmit}>
      <NewsCreate titleRef={titleRef} editorRef={editorRef} onBack={onBack} />
    </form>
  );
}

export default NewsCreateTemplate;
