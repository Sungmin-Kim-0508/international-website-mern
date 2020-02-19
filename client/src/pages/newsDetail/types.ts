import { ActionType } from "typesafe-actions";
import { News } from "commons/__types__";
import * as action from "./actions";

export type NewsDetailAction = ActionType<typeof action>;

export type NewsDetailState = {
  newsDetail: News;
  isLoading: boolean;
};
