import React, { useEffect } from "react";
import NewsDetailTemplates from "./templates";
import { getSingleNewsDetail } from "./actionMethods";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";
import { Spinner } from "components";

function NewsDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleNewsDetail(id));
  }, []);
  const { newsDetail, isLoading } = useSelector(
    (state: RootState) => state.newsDetail
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <NewsDetailTemplates newsDetail={newsDetail} />
      )}
    </>
  );
}

export default NewsDetailPage;
