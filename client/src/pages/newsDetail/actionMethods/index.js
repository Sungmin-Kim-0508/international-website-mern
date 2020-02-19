import newsApi from "commons/apis/NewsApi";
import { getNewsDetail, newsDetailLoading } from "../actions";
import { returnErrors } from "rootReducer";

export const getSingleNewsDetail = id => async dispatch => {
  dispatch(newsDetailLoading());
  try {
    const { data: news } = await newsApi.detailNews(id);
    dispatch(getNewsDetail(news));
  } catch (err) {
    err.response === undefined
      ? console.error(err)
      : dispatch(returnErrors(err.response.data, err.response.status));
  }
};
