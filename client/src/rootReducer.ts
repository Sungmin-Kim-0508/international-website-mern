import { combineReducers } from "redux";
import { createAction } from "typesafe-actions";
import homeReducer from "pages/home/reducer";
import signInReducer from "pages/signIn/reducer";
import newsDetailReducer from "pages/newsDetail/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  signIn: signInReducer,
  newsDetail: newsDetailReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

/**
 *  Error Actions, Reducer
 */
const GET_ERRORS = "rootReducer/GET_ERRORS";
export type ErrorState = {
  msg: string;
  status: number;
  id: string;
};
export const returnErrors = createAction(GET_ERRORS)<object>();
export const returnErrorsAction = (msg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id }
});
