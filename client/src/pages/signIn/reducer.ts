import { createReducer } from "typesafe-actions";
import { UserState } from "commons/__types__";

const initialState: UserState = {
  isAuthenciated: false,
  isLoading: false,
  token: "",
  user: null
};

// const signIn = createReducer
