import axios from "axios";
import routes from "commons/__routes__";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL
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
