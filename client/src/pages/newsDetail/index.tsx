import React, { useEffect } from "react";
import NewsDetailTemplates from "./templates";
import routes from "commons/__routes__";
import newsApi from "commons/apis/NewsApi";
import { getSingleNewsDetail } from "./actionMethods";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, returnErrors } from "rootReducer";
import { Spinner } from "components";
import { isNewsEdit } from "./actions";
import { tokenConfig } from "rootAction";

function NewsDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleNewsDetail(id));
  }, []);
  const { newsDetail, isLoading, isEdit } = useSelector(
    (state: RootState) => state.newsDetail
  );
  const { user, token } = useSelector((state: RootState) => state.signIn);

  /**
   *  history object that has history.push(), history.goBack()
   */
  let history = useHistory();

  /**
   * Event Method to edit news
   */
  const onEdit = () => {
    history.push(`${routes.news}/${id}${routes.newsEdit}`);
    dispatch(isNewsEdit());
  };

  /**
   *  Event Method to delete single news
   */
  const onDelete = async () => {
    let isDelete = window.confirm("Are you sure you delete this news?");
    if (isDelete) {
      try {
        await newsApi.deleteNews(id, user?._id, tokenConfig(token));
        history.goBack();
      } catch (error) {
        const {
          data: { msg },
          status
        } = error.response;
        returnErrors({ msg, status });
      }
    }
  };

  /**
   * Event Method to move to news page
   */
  const onBack = () => {
    history.push(routes.news);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <NewsDetailTemplates
          newsDetail={newsDetail}
          isEdit={isEdit}
          onEdit={onEdit}
          onDelete={onDelete}
          onBack={onBack}
        />
      )}
    </>
  );
}

export default NewsDetailPage;
