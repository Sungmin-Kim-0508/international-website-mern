import { ActionType } from "typesafe-actions";
import * as action from "./actions";
import { NewsState, ForVolunteersState } from "commons/__types__";
import { ForStudentsState } from "pages/forStudents/types";

export type HomeAction = ActionType<typeof action>;
// type TodosAction =
//   | ReturnType<typeof NEWS_LOADING>
//   | ReturnType<typeof NEWS_SEARCHING>

export type HomeState = {
  news: NewsState;
  forStudents: ForStudentsState;
  forVolunteers: ForVolunteersState;
  isNewsLoading: boolean;
  isNewsSearching: boolean;
};
