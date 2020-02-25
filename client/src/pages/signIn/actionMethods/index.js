import authApi from "commons/apis/AuthApi";
import {
  USER_LOADING,
  AUTH_GOOGLE,
  REGISTER_FAIL,
  GOOGLE_LOGIN_ERROR
} from "../actions";
import { returnErrors } from "../../../rootReducer";

// Google Login
export const googleLogin = profileObj => async dispatch => {
  dispatch({ type: USER_LOADING });

  try {
    const {
      data: { token, user }
    } = await authApi.googleLogin(profileObj);
    dispatch({ type: AUTH_GOOGLE, payload: { user, token } });
    /** IMPORTANT : Make sure dispatching USER_LOADED after login is successful */
    // dispatch({ type: USER_LOADED, payload: { user, token } });
  } catch (err) {
    const { data, status } = err.response;
    dispatch(returnErrors(data.msg, status, REGISTER_FAIL));
  }
};

export const googleLoginFail = (error, details) => async () => {
  return {
    type: GOOGLE_LOGIN_ERROR,
    payload: { error, details }
  };
};
