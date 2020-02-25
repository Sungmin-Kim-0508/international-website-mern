import React from "react";
import ReactQuill from "react-quill";
import * as Sc from "./style";
import { NewsDetailTitle, NewsDetailDescription, Typography } from "components";

type NewsCreateProps = {
  titleRef: React.RefObject<HTMLInputElement>;
  editorRef: React.RefObject<ReactQuill>;
  onBack: () => void;
};

function NewsCreate({
  titleRef,
  editorRef,
  onBack
}: NewsCreateProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.TitleWrapper>
        <Typography styleType="h1">Create News</Typography>
      </Sc.TitleWrapper>
      <NewsDetailTitle titleRef={titleRef} isCreate={true} />
      <NewsDetailDescription
        editorRef={editorRef}
        isCreate={true}
        onBack={onBack}
      />
    </Sc.Container>
  );
}

export default NewsCreate;
