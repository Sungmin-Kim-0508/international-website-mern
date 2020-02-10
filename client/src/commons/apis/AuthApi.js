import axios from "axios";
import urls from "../components/urls";
import {
  IS_PRODUCTION,
  PRODUCTION_URL,
  DEVELOPMENT_URL
} from "./production_config";

const api = axios.create({
  baseURL: IS_PRODUCTION ? PRODUCTION_URL : `${DEVELOPMENT_URL}${urls.NEWS}`
});

const authApi = {
  signUp: (name, email, password, password2) => {
    return api.post(urls.SIGN_UP, {
      name,
      email,
      password,
      password2
    });
  },
  signIn: (email, password) => {
    return api.post(`${urls.SIGN_IN}`, {
      email,
      password
    });
  },
  googleLogin: profileObj => {
    return api.post(`${urls.AUTH_GOOGLE}`, {
      profileObj
    });
  },
  facebookLogin: profileObj => {
    return api.post(urls.AUTH_FACEBOOK, { profileObj });
  },
  forgetPassword: email => {
    return api.post(`users${urls.FORGET_PASSWORD}`, { email });
  },
  editProfile: (avatarUrl, name, email, id, tokenConfig) => {
    const { headers } = tokenConfig;
    return api.post(
      `users/${id}${urls.EDIT_PROFILE}`,
      { avatarUrl, name, email },
      { headers }
    );
  },
  getUserInfo: headerConfig => {
    return api.get(urls.USER_INFO, headerConfig);
  }
};

export default authApi;
