import { combineReducers } from "redux";
import { createAction } from "typesafe-actions";
import homeReducer from "pages/home/reducer";

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

const GET_ERRORS = "GET_ERRORS";

export const returnErros = createAction(GET_ERRORS)<object>();

// export const returnErros = (msg, status, id = null) => ({
//   type: GET_ERRORS,
//   payload: {msg, status, id}
// })
