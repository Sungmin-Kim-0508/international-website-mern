import { createReducer } from "typesafe-actions";
import { NewsDetailAction, NewsDetailState } from "./types";
import { NEWS_DETAIL, LOADING } from "./actions";
import { defaultUserInfo } from "commons/defaultState";

const initialState: NewsDetailState = {
  newsDetail: {
    _id: "",
    createdAt: new Date(),
    creator: defaultUserInfo,
    description: "",
    newsComments: [],
    title: "",
    views: 0
  },
  isLoading: false
};

const newsDetail = createReducer<NewsDetailState, NewsDetailAction>(
  initialState,
  {
    [LOADING]: state => ({
      ...state,
      isLoading: true
    }),
    [NEWS_DETAIL]: (state, { payload }) => {
      return {
        ...state,
        newsDetail: payload,
        isLoading: false
      };
    }
  }
);

export default newsDetail;
