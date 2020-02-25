import React from "react";
import ReactQuill from "react-quill";
import * as Sc from "./style";
import { Paragraph, Editor, Button } from "components";
import renderHTML from "react-render-html";
import { BACK, SUBMIT } from "commons/string";

type NewsDetailDescriptionProps = {
  description?: string;
  isEdit?: boolean;
  onEditorChange?: (value: string) => void;
  onBack?: () => void;
  editorRef?: React.RefObject<ReactQuill>;
};

function NewsDetailDescription({
  description,
  isEdit,
  editorRef,
  onEditorChange,
  onBack
}: NewsDetailDescriptionProps) {
  return (
    <Sc.Container>
      {!isEdit && (
        <Paragraph color="black" textAlign="left">
          {renderHTML(description) as React.ReactNode}
        </Paragraph>
      )}
      {isEdit && (
        <>
          <Sc.EditorWrapper>
            <Editor
              defaultValue={description}
              onChange={onEditorChange}
              editorRef={editorRef}
            />
          </Sc.EditorWrapper>
          <Sc.ButtonWrapper>
            <Button theme="success">{SUBMIT}</Button>
            <Button theme="gray" onClick={onBack}>
              {BACK}
            </Button>
          </Sc.ButtonWrapper>
        </>
      )}
    </Sc.Container>
  );
}

export default NewsDetailDescription;
