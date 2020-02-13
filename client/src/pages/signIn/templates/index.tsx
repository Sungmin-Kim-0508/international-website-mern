import React from "react";
import * as Sc from "./style";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";
import { Button } from "components";
import { SignInInputs, SignInLabels } from "components";
import { TEXT_SIGN_IN, TEXT_SIGN_IN_WITH_GOOGLE } from "commons/string";
import { responseGoogleFail } from "..";

type SignInTemplatesProps = {
  responseGoogle: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  responseGoogleFail: ({ error, details }: responseGoogleFail) => void;
};

function SignInTemplates({
  responseGoogle,
  responseGoogleFail
}: SignInTemplatesProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.LabelsWrapper>
        <SignInLabels />
      </Sc.LabelsWrapper>
      <Sc.InputWrapper>
        <SignInInputs />
      </Sc.InputWrapper>
      <Sc.ButtonWrapper>
        <Button theme="success">{TEXT_SIGN_IN}</Button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText={TEXT_SIGN_IN_WITH_GOOGLE}
          onSuccess={responseGoogle}
          onFailure={responseGoogleFail}
        />
      </Sc.ButtonWrapper>
    </Sc.Container>
  );
}

export default SignInTemplates;
