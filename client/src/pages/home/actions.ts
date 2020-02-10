import { createAction } from "typesafe-actions";
import { NewsState } from "commons/__types__";

export const NEWS_LOADING = "home/NEWS_LOADING";
export const NEWS_SEARCHING = "home/NEWS_SEARCHING";
export const LOAD_SUCCESS = "home/LOAD_SUCCESS";
export const NEWS_LOADED = "home/NEWS_LOADED";
export const NEWS_PAGINATION_LOADED = "home/NEWS_PAGINATION_LOADED";
export const NEWS_SEARCHED = "home/NEWS_SEARCHED";
export const NEWS_DETAIL = "home/NEWS_DETAIL";
export const UPLOAD_NEWS = "home/UPLOAD_NEWS";
export const EDIT_NEWS = "home/EDIT_NEWS";
export const DELETE_NEWS = "home/DELETE_NEWS";

export const newsLoading = createAction(NEWS_LOADING)<NewsState>();
export const newsSearching = createAction(NEWS_SEARCHING)<NewsState>();
export const loadSuccess = createAction(LOAD_SUCCESS)<NewsState>();
export const newsLoaded = createAction(NEWS_LOADED)<NewsState>();
export const newsPaginationLoaded = createAction(NEWS_PAGINATION_LOADED)<
  NewsState
>();
export const newsSearched = createAction(NEWS_SEARCHED)<NewsState>();
export const newsDetail = createAction(NEWS_DETAIL)<NewsState>();
export const uploadNews = createAction(UPLOAD_NEWS)<NewsState>();
export const editNews = createAction(EDIT_NEWS)<NewsState>();
export const deleteNews = createAction(DELETE_NEWS)<NewsState>();
