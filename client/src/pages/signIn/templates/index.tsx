import React from "react";
import * as Sc from "./style";
import { Button } from "components";
import { SignInInputs, SignInLabels } from "components";
import { TEXT_SIGN_IN, TEXT_SIGN_IN_WITH_GOOGLE } from "commons/string";

function SignInTemplates(): React.ReactElement {
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
        <Button theme="success">{TEXT_SIGN_IN_WITH_GOOGLE}</Button>
      </Sc.ButtonWrapper>
    </Sc.Container>
  );
}

export default SignInTemplates;
