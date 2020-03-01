import { createReducer } from "typesafe-actions";
import { ForStudentsState, ForStudentsAction } from "./types";
import {
  STUDENTS_FILE_LOADING,
  GET_ALL_STUDENTS_FILE,
  GET_PAGINATED_STUDENT_FILES
} from "./action";

const defaultFile = {
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
};

const initialState: ForStudentsState = {
  isLoading: false,
  file: defaultFile,
  msg: ""
};

const forStudents = createReducer<ForStudentsState, ForStudentsAction>(
  initialState,
  {
    [STUDENTS_FILE_LOADING]: state => ({
      ...state,
      msg: "Loading..."
    }),
    [GET_PAGINATED_STUDENT_FILES]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        file: payload,
        msg: ""
      };
    }
  }
);

export default forStudents;
