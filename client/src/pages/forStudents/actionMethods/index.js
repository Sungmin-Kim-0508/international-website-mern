import studentsApi from "commons/apis/StudentApi";
import { fileLoading, pagiantedFilesLoaded, uploadFile } from "../action";
import { returnErrors } from "rootReducer";
import { tokenConfig } from "rootAction";

export const loadPaginatedFile = (pages = 1, limit = 6) => async dispatch => {
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

export const uploadStudentFile = formData => async (dispatch, getState) => {
  const token = getState().signIn.token;
  try {
    await studentsApi.uploadFile(formData, tokenConfig(token, formData));
    dispatch(uploadFile());
  } catch (error) {
    error.response === undefined
      ? console.warn(error)
      : dispatch(returnErrors(error.response.data, error.response.status));
  }
};
