import { createReducer } from "typesafe-actions";
import { NewsDetailAction, NewsDetailState } from "./types";
import { NEWS_DETAIL, LOADING, IS_NEWS_EDIT } from "./actions";
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
  isLoading: false,
  isEdit: false
};

const newsDetail = createReducer<NewsDetailState, NewsDetailAction>(
  initialState,
  {
    [LOADING]: state => ({
      ...state,
      isLoading: true,
      isEdit: false
    }),
    [NEWS_DETAIL]: (state, { payload }) => {
      return {
        ...state,
        newsDetail: payload,
        isLoading: false,
        isEdit: false
      };
    },
    [IS_NEWS_EDIT]: state => {
      return {
        ...state,
        isEdit: true
      };
    }
  }
);

export default newsDetail;
