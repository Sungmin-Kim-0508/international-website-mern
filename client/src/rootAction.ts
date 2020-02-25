import authApi from "commons/apis/AuthApi";
import { CHECKING_TOKEN, USER_LOADED, NO_TOKEN } from "pages/signIn/actions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: CHECKING_TOKEN });
  const token = getState().signIn.token;
  return authApi
    .getUserInfo(tokenConfig(token))
    .then(res => {
      const user = res.data;
      dispatch({
        type: USER_LOADED,
        payload: { user }
      });
    })
    .catch(error => {
      dispatch({
        type: NO_TOKEN,
        payload: error
      });
    });
};

export const tokenConfig = (token, formData = null) => {
  type configType = {
    headers: object;
  };

  let config: configType = { headers: {} };
  if (formData) {
    config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
  } else {
    config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
