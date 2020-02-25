import React, { useRef, useLayoutEffect } from "react";
import ReactQuill from "react-quill";
import NewsCreateTemplate from "./template";
import newsApi from "commons/apis/NewsApi";
import routes from "commons/__routes__";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tokenConfig } from "rootAction";
import { RootState, returnErrors } from "rootReducer";
import { checkFilled } from "commons/utils/validation";

function NewsCreatePage(): React.ReactElement {
  const { token, user } = useSelector((state: RootState) => state.signIn);

  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<ReactQuill>(null);

  //  To fetch ref Object
  useLayoutEffect(() => {});

  const history = useHistory();
  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // Access the title DOM
    const title = titleRef.current?.value;
    // Access React Quill DOM
    const description = editorRef.current?.getEditor().root.innerHTML;

    const isFilled = checkFilled(title as string, description as string);
    if (isFilled) {
      try {
        await newsApi.uploadNews(
          title,
          description,
          user?._id,
          tokenConfig(token)
        );
        history.push(routes.news);
      } catch (error) {
        const {
          data: { msg },
          status
        } = error.response;
        returnErrors({ msg, status });
      }
    } else {
      returnErrors({ msg: "Enter Title and description" });
    }
  };

  const onBack = () => {
    history.goBack();
  };
  return (
    <NewsCreateTemplate
      titleRef={titleRef}
      editorRef={editorRef}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
}

export default NewsCreatePage;
