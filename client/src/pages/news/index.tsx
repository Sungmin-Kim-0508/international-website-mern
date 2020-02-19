import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsTemplate from "./template";
import { RootState } from "rootReducer";
import { loadPaginatedNews } from "pages/home/actionMethods";

function NewsPage(): React.ReactElement {
  const { home } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const numNewsBlock = 6;
  useEffect(() => {
    dispatch(loadPaginatedNews(1, numNewsBlock));
  }, []);

  const onPageChange = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    dispatch(loadPaginatedNews(page, numNewsBlock));
  };

  return (
    <>
      <NewsTemplate cards={home.news} onPageChange={onPageChange} />
    </>
  );
}

export default NewsPage;
