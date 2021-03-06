import { createReducer } from "typesafe-actions";
import { UserState } from "commons/__types__";
import { SignInAction } from "./types";
import {
  AUTH_GOOGLE,
  CHECKING_TOKEN,
  USER_LOADING,
  USER_LOADED,
  GOOGLE_LOGIN_ERROR,
  NO_TOKEN
} from "./actions";
import { defaultUserInfo, defaultUserState } from "commons/defaultState";
import { USER_SIGN_OUT } from "pages/header/action";

const initialState: UserState = {
  isAuthenciated: false,
  isLoading: false,
  token: localStorage.getItem("token") as string,
  user: defaultUserInfo,
  msg: ""
};

const signIn = createReducer<UserState, SignInAction>(initialState, {
  [CHECKING_TOKEN]: state => {
    return {
      ...state,
      isLoading: true
    };
  },
  [USER_LOADING]: () => ({
    ...initialState,
    isLoading: true,
    user: defaultUserInfo,
    msg: "Login Processing..."
  }),
  [USER_LOADED]: (_, { payload: { user } }) => {
    return {
      isAuthenciated: true,
      isLoading: false,
      token: localStorage.getItem("token"),
      user: user,
      msg: "Successfully Login!"
    };
  },
  [AUTH_GOOGLE]: (_, { payload: { user, token } }) => {
    /* localStorage.setItem("token", token as string); */
    localStorage.setItem("token", <string>token);
    return {
      isAuthenciated: true,
      isLoading: false,
      token: localStorage.getItem("token"),
      user: user,
      msg: "Successfully Login!"
    };
  },
  [GOOGLE_LOGIN_ERROR]: (_, { payload: { details, error } }) => {
    localStorage.removeItem("token");
    return {
      isAuthenciated: false,
      isLoading: false,
      token: "",
      user: defaultUserInfo,
      msg: `${details} - ${error}`
    };
  },
  [USER_SIGN_OUT]: () => {
    localStorage.removeItem("token");
    return defaultUserState;
  },
  [NO_TOKEN]: state => {
    localStorage.removeItem("token");
    return {
      ...state,
      isAuthenciated: false,
      isLoading: false
    };
  }
});

export default signIn;
