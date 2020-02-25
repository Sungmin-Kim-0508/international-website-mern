import { createAction } from "typesafe-actions";
import { News } from "commons/__types__";

export const LOADING = "newsDetail/LOADING";
export const NEWS_DETAIL = "newsDetail/NEWS_DETAIL";
export const IS_NEWS_EDIT = "newsDetail/IS_NEWS_EDIT";

export const newsDetailLoading = createAction(LOADING)();
export const getNewsDetail = createAction(NEWS_DETAIL)<News>();
export const isNewsEdit = createAction(IS_NEWS_EDIT)();
