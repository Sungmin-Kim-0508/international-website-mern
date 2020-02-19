import { createAction } from "typesafe-actions";
import { News } from "commons/__types__";

export const LOADING = "newsDetail/LOADING";
export const NEWS_DETAIL = "newsDetail/NEWS_DETAIL";

export const newsDetailLoading = createAction(LOADING)<News>();
export const getNewsDetail = createAction(NEWS_DETAIL)<News>();
