import { createReducer } from "typesafe-actions";
import { UserState } from "commons/__types__";
import { SignInAction } from "./types";
import {
  AUTH_GOOGLE,
  USER_LOADING,
  USER_LOADED,
  GOOGLE_LOGIN_ERROR
} from "./actions";

const initialState: UserState = {
  isAuthenciated: false,
  isLoading: false,
  token: "",
  user: null,
  msg: ""
};

const signIn = createReducer<UserState, SignInAction>(initialState, {
  [USER_LOADING]: () => ({
    isAuthenciated: false,
    isLoading: true,
    token: "",
    user: null,
    msg: "Login Processing..."
  }),
  [USER_LOADED]: (_, { payload: { user } }) => ({
    isAuthenciated: true,
    isLoading: false,
    token: localStorage.getItem("token"),
    user: user,
    msg: "Successfully Login!"
  }),
  [AUTH_GOOGLE]: (_, { payload: { user, token } }) => {
    localStorage.setItem("token", <string>token);
    // localStorage.setItem("token", token as string);
    return {
      isAuthenciated: true,
      isLoading: false,
      token: "",
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
      user: null,
      msg: `${details} - ${error}`
    };
  }
});

export default signIn;
