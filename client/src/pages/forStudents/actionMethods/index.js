import studentsApi from "commons/apis/StudentApi";
import { fileLoading, pagiantedFilesLoaded } from "../action";
import { returnErrors } from "rootReducer";

export const loadPaginatedFile = (pages = 1, limit = 3) => async dispatch => {
  dispatch(fileLoading());
  try {
    const file = await studentsApi.getPaginatedFiles(pages, limit);

    dispatch(pagiantedFilesLoaded(file));
  } catch (err) {
    err.response === undefined
      ? console.error(err)
      : dispatch(returnErrors(err.response.data, err.response.status));
  }
};
