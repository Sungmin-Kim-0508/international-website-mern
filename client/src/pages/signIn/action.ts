import { createAction } from "typesafe-actions";
import { UserState } from "commons/__types__";

export const AUTH_GOOGLE = "signIn/AUTH_GOOGLE";
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

export const authGoogel = createAction(AUTH_GOOGLE)<UserState>();
