import { UserInfo } from "commons/__types__";
import * as action from "./action";
import { ActionType } from "typesafe-actions";

export type ForStudents = {
  _id: string;
  fileName: string;
  description: string;
  fileUrl: string;
  creator: UserInfo;
  createdAt: Date;
};

export type ForStudentsAction = ActionType<typeof action>;

export type FileType = {
  docs: ForStudents[];
  totalDocs: Number;
  limit: Number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: Number;
  totalPages: Number;
  offset: Number;
  prevPage: Number | null;
  nextPage: Number | null;
  pagingCounter: Number;
  meta: {};
};

export type ForStudentsState = {
  isLoading: boolean;
  file: FileType;
  msg: string;
};
