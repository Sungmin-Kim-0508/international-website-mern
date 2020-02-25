import React from "react";
import ReactQuill from "react-quill";
import * as Sc from "./style";
import "react-quill/dist/quill.snow.css";
import "./react_quil_style.css";

type EditorProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  editorRef?: React.RefObject<ReactQuill>;
};

function Editor({
  defaultValue = "",
  editorRef,
  onChange
}: EditorProps): React.ReactElement {
  return (
    <div className="text-editor">
      <Sc.CustomToolBar />
      <ReactQuill
        defaultValue={defaultValue}
        modules={Sc.quillModules}
        onChange={onChange}
        ref={editorRef}
      />
    </div>
  );
}

export default Editor;
