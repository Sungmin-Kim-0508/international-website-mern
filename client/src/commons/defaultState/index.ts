/** Values of default state for all reducers */
import {
  NewsState,
  ForVolunteersState,
  UserState,
  UserInfo
} from "commons/__types__";
import { ForStudentsState } from "pages/forStudents/types";

export const defaultNews: NewsState = {
  news: {
    docs: [],
    totalDocs: 0,
    limit: 0,
    hasPrevPage: false,
    hasNextPage: false,
    page: 0,
    totalPages: 0,
    offset: 0,
    prevPage: 0,
    nextPage: 0,
    pagingCounter: 0,
    meta: {}
  },
  newsDetail: "",
  msg: ""
};

export const defaultUserInfo: UserInfo = {
  admin: false,
  newsComments: [],
  news: [],
  studentFiles: [],
  volunteerFiles: [],
  _id: "",
  name: "",
  email: "",
  googleId: 0,
  avatarUrl: "",
  register_date: new Date()
};

export const defaultUserState: UserState = {
  token: "",
  isAuthenciated: false,
  isLoading: false,
  user: defaultUserInfo,
  msg: ""
};

export const defaultForStudents: ForStudentsState = {
  isLoading: false,
  msg: "",
  file: {
    docs: [],
    totalDocs: 0,
    limit: 0,
    hasPrevPage: false,
    hasNextPage: false,
    page: 0,
    totalPages: 0,
    offset: 0,
    prevPage: 0,
    nextPage: 0,
    pagingCounter: 0,
    meta: {}
  }
};

export const defaultForVolunteers: ForVolunteersState = {
  isLoading: false,
  msg: "",
  fileList: [],
  paginationOptions: {}
};
