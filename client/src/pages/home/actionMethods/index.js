import newsApi from "commons/apis/NewsApi";
import { newsLoaded, newsLoading, newsPaginationLoaded } from "../actions";
import { returnErrors } from "../../../rootReducer";

// const content = useSelector(state => state);

export function loadNews() {
  return async dispatch => {
    dispatch(newsLoading());

    try {
      const { data: news } = await newsApi.listNews();
      console.log(news); // type of new is News
      dispatch(newsLoaded(news));
    } catch (error) {
      error.response === undefined
        ? console.error(error)
        : dispatch(returnErrors(error.response));
    }
  };
}

/**
 *
 * @param {Number} pages  -
 * @param {Number} limit  - Limit the number of docs
 */
export function loadPaginatedNews(pages = 1, limit = 3) {
  return async dispatch => {
    dispatch(newsLoading());

    try {
      const { data } = await newsApi.paginatedNews(pages, limit);
      let news = {
        news: { ...data },
        newsDetail: "",
        msg: ""
      };
      dispatch(newsPaginationLoaded(news));
    } catch (error) {
      error.response === undefined
        ? console.error(error)
        : dispatch(returnErrors(error.response));
    }
  };
}
