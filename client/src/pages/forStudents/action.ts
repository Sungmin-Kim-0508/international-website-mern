import { createAction } from "typesafe-actions";
import { ForStudentsState, FileType } from "./types";

export const STUDENTS_FILE_LOADING = "forStudents/STUDENTS_FILE_LOADING";
export const GET_ALL_STUDENTS_FILE = "forStudents/GET_ALL_STUDENTS_FILE";
export const GET_PAGINATED_STUDENT_FILES =
  "forStudents/GET_PAGINATED_STUDENT_FILES";

export const fileLoading = createAction(STUDENTS_FILE_LOADING)();
export const pagiantedFilesLoaded = createAction(GET_PAGINATED_STUDENT_FILES)<
  FileType
>();
