import { combineReducers } from "redux";
import { createAction } from "typesafe-actions";
import homeReducer from "pages/home/reducer";
import signInReducer from "pages/signIn/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  signIn: signInReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

const GET_ERRORS = "GET_ERRORS";

export const returnErrors = createAction(GET_ERRORS)<object>();

// export const returnErrors = (msg, status, id = null) => ({
//   type: GET_ERRORS,
//   payload: {msg, status, id}
// })
