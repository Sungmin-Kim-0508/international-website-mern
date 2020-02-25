import React, { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, returnErrors } from "rootReducer";
import { useParams, useHistory } from "react-router-dom";
import { tokenConfig } from "rootAction";
import routes from "commons/__routes__";
import newsApi from "commons/apis/NewsApi";
import ReactQuill from "react-quill";
import NewsEditDetailTemplate from "./template";

function NewsEditDetailPage(): React.ReactElement {
  const { isEdit, newsDetail } = useSelector(
    (state: RootState) => state.newsDetail
  );
  const { token } = useSelector((state: RootState) => state.signIn);

  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };

  const onEditorChange = (value: string) => {
    const description = value;
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<ReactQuill>(null);

  //  To fetch ref Object
  useLayoutEffect(() => {});

  const { id } = useParams();
  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // Access the title DOM
    const title = titleRef.current?.value;
    // Access React Quill DOM
    const description = editorRef.current?.getEditor().root.innerHTML;
    try {
      await newsApi.editNews(id, title, description, tokenConfig(token));
      history.push(`${routes.news}/${id}`);
    } catch (error) {
      const {
        data: { msg },
        status
      } = error.response;
      returnErrors({ msg, status });
    }
  };

  return (
    <NewsEditDetailTemplate
      newsDetail={newsDetail}
      isEdit={isEdit}
      titleRef={titleRef}
      editorRef={editorRef}
      onBack={onBack}
      onEditorChange={onEditorChange}
      onSubmit={onSubmit}
    />
  );
}

export default NewsEditDetailPage;
