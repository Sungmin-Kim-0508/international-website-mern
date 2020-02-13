import { createAction } from "typesafe-actions";
import { UserState } from "commons/__types__";
import { responseGoogleFail } from ".";
import { USER_SIGN_OUT } from "pages/header/action";

export const AUTH_GOOGLE = "signIn/AUTH_GOOGLE";
export const GOOGLE_LOGIN_ERROR = "signIn/GOOGLE_LOGIN_ERROR";
export const AUTH_ERROR = "signIn/AUTH_ERROR";
export const EDIT_PROFILE = "signIn/EDIT_PROFILE";
export const FORGET_PASSWORD = "signIn/FORGET_PASSWORD";
export const GET_ERRORS = "signIn/GET_ERRORS";
export const LOGIN_SUCCESS = "signIn/LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "signIn/LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "signIn/REGISTER_SUCCESS";
export const REGISTER_FAIL = "signIn/REGISTER_FAIL";
export const USER_LOADED = "signIn/USER_LOADED";
export const USER_LOADING = "signIn/USER_LOADING";

export const userLoading = createAction(USER_LOADING)<UserState>();
export const userLoaded = createAction(USER_LOADED)<UserState>();
export const authGoogle = createAction(AUTH_GOOGLE)<UserState>();
export const googleLoginError = createAction(GOOGLE_LOGIN_ERROR)<
  responseGoogleFail
>();
export const userSignOut = createAction(USER_SIGN_OUT)<UserState>();
