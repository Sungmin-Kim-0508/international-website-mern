import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";
import { loadPaginatedNews } from "pages/home/actionMethods";
import { useHistory } from "react-router-dom";
import routes from "commons/__routes__";
import NewsTemplate from "./template";

function NewsPage(): React.ReactElement {
  const { home } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const numNewsBlock = 6;
  useEffect(() => {
    dispatch(loadPaginatedNews(1, numNewsBlock));
  }, [dispatch]);

  const onPageChange = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    dispatch(loadPaginatedNews(page, numNewsBlock));
  };

  const history = useHistory();
  /**
   * Click Event Method to move create news page
   */
  const onMoveCreateNews = () => {
    history.push(routes.newsUpload);
  };

  return (
    <>
      <NewsTemplate
        cards={home.news}
        onPageChange={onPageChange}
        onMoveCreateNews={onMoveCreateNews}
      />
    </>
  );
}

export default NewsPage;
