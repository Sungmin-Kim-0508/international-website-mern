import { createReducer } from "typesafe-actions";
import { HomeAction } from "./types";
import {
  defaultNews,
  defaultForStudents,
  defaultForVolunteers
} from "commons/defaultState";
import { HomeState } from "./types";
import { NEWS_LOADING, NEWS_LOADED, NEWS_PAGINATION_LOADED } from "./actions";

const initialState: HomeState = {
  news: defaultNews,
  forStudents: defaultForStudents,
  forVolunteers: defaultForVolunteers,
  isNewsLoading: false,
  isNewsSearching: false
};

const home = createReducer<HomeState, HomeAction>(initialState, {
  [NEWS_LOADING]: state => ({
    ...state,
    news: defaultNews,
    isNewsLoading: true,
    isNewsSearching: false
  }),
  [NEWS_LOADED]: state => {
    return {
      ...state,
      isNewsLoading: false,
      isNewsSearching: false
    };
  },
  [NEWS_PAGINATION_LOADED]: (state, { payload: news }) => {
    return {
      ...state,
      news: news,
      isNewsLoading: false,
      isNewsSearching: false
    };
  }
});

export default home;
