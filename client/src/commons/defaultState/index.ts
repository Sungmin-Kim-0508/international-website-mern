/** Values of default state for all reducers */
import {
  NewsState,
  ForStudentsState,
  ForVolunteersState
} from "commons/__types__";

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

export const defaultForStudents: ForStudentsState = {
  isLoading: false,
  msg: "",
  fileList: [],
  paginationOptions: {}
};

export const defaultForVolunteers: ForVolunteersState = {
  isLoading: false,
  msg: "",
  fileList: [],
  paginationOptions: {}
};
