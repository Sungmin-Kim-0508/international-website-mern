import React from "react";
import SignInTemplates from "./templates";
import routes from "commons/__routes__";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";
import { googleLogin, googleLoginFail } from "./actionMethods";

export type responseGoogleFail = {
  error: string;
  details: string;
};

export default function SignInPage(): React.ReactElement {
  const dispatch = useDispatch();

  const history = useHistory();
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const { profileObj } = response as GoogleLoginResponse;
    dispatch(googleLogin(profileObj));
    history.push(routes.home);
  };

  const responseGoogleFail = ({ error, details }: responseGoogleFail) => {
    console.error(
      `Goolge Login Fail - Error Code: ${error}, Error Detail: ${details}`
    );
    dispatch(googleLoginFail(error, details));
  };
  return (
    <>
      <SignInTemplates
        responseGoogle={responseGoogle}
        responseGoogleFail={responseGoogleFail}
      />
    </>
  );
}
