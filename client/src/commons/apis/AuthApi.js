import axios from "axios";
import routes from "commons/__routes__";
import {
  IS_PRODUCTION,
  PRODUCTION_URL,
  DEVELOPMENT_URL
} from "./production_config";

const api = axios.create({
  baseURL: IS_PRODUCTION ? `${PRODUCTION_URL}` : `${DEVELOPMENT_URL}`
});

const authApi = {
  signUp: (name, email, password, password2) => {
    return api.post(routes.signUp, {
      name,
      email,
      password,
      password2
    });
  },
  signIn: (email, password) => {
    return api.post(`${routes.signIn}`, {
      email,
      password
    });
  },
  googleLogin: profileObj => {
    return api.post(`${routes.auth_google}`, {
      profileObj
    });
  },
  // facebookLogin: profileObj => {
  //   return api.post(routes.AUTH_FACEBOOK, { profileObj });
  // },
  forgetPassword: email => {
    return api.post(`users${routes.FORGET_PASSWORD}`, { email });
  },
  editProfile: (avatarUrl, name, email, id, tokenConfig) => {
    const { headers } = tokenConfig;
    return api.post(
      `users/${id}${routes.EDIT_PROFILE}`,
      { avatarUrl, name, email },
      { headers }
    );
  },
  getUserInfo: headerConfig => {
    return api.get(routes.userInfo, headerConfig);
  }
};

export default authApi;
