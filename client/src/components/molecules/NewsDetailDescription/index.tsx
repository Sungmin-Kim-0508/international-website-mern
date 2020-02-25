import React from "react";
import ReactQuill from "react-quill";
import * as Sc from "./style";
import { Paragraph, Editor, Button } from "components";
import renderHTML from "react-render-html";
import { BACK, SUBMIT } from "commons/string";

type NewsDetailDescriptionProps = {
  description?: string;
  isCreate?: boolean;
  isEdit?: boolean;
  editorRef?: React.RefObject<ReactQuill>;
  onEditorChange?: (value: string) => void;
  onBack?: () => void;
};

function NewsDetailDescription({
  description = "",
  isCreate,
  isEdit,
  editorRef,
  onEditorChange,
  onBack
}: NewsDetailDescriptionProps) {
  return (
    <Sc.Container>
      {!isEdit && !isCreate && (
        <Paragraph color="black" textAlign="left">
          {renderHTML(description) as React.ReactNode}
        </Paragraph>
      )}
      {isCreate && (
        <>
          <Sc.EditorWrapper>
            <Editor editorRef={editorRef} />
          </Sc.EditorWrapper>
          <Sc.ButtonWrapper>
            <Button theme="success">{SUBMIT}</Button>
            <Button theme="gray" onClick={onBack}>
              {BACK}
            </Button>
          </Sc.ButtonWrapper>
        </>
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
