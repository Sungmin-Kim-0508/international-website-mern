import React from "react";
import * as Sc from "./style";
import { SignUpInputs, SignUpLabels, Button, NavItem } from "components";
import { TEXT_SIGN_UP, ALREADY_HAVE_AN_ACCOUNT } from "commons/string";
import routes from "commons/__routes__";

function SignUpTemplates() {
  return (
    <Sc.Container>
      <Sc.LabelWrapper>
        <SignUpLabels />
      </Sc.LabelWrapper>
      <Sc.InputsWrapper>
        <SignUpInputs />
      </Sc.InputsWrapper>
      <Sc.ButtonWrapper>
        <NavItem to={routes.signIn} textAlign="center">
          {ALREADY_HAVE_AN_ACCOUNT}
        </NavItem>
        <Button theme="success">{TEXT_SIGN_UP}</Button>
      </Sc.ButtonWrapper>
    </Sc.Container>
  );
}

export default SignUpTemplates;
