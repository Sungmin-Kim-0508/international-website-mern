import { USER_SIGN_OUT } from "../action";

export const signOut = () => dispatch => {
  dispatch({ type: USER_SIGN_OUT });
};
