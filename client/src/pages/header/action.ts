import { createAction } from "typesafe-actions";
import { UserState } from "commons/__types__";

export const USER_SIGN_OUT = "header/USER_SIGN_OUT";

export const userSignOut = createAction(USER_SIGN_OUT)<UserState>();
