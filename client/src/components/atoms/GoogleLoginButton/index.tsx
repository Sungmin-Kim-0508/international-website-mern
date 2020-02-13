import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";
import { TEXT_SIGN_IN_WITH_GOOGLE } from "commons/string";
import { responseGoogleFail } from "pages/signIn";

type GoogleLoginButtonProps = {
  responseGoogle: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  responseGoogleFail: ({ error, details }: responseGoogleFail) => void;
};

export default function GoogleLoginButton({
  responseGoogle,
  responseGoogleFail
}: GoogleLoginButtonProps): React.ReactElement {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
      buttonText={TEXT_SIGN_IN_WITH_GOOGLE}
      onSuccess={responseGoogle}
      onFailure={responseGoogleFail}
    />
  );
}
