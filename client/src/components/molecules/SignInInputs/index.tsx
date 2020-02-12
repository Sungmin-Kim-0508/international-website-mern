import React from "react";
import * as Sc from "./style";
import { Input, NavItem } from "components";
import routes from "commons/__routes__";
import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PW,
  YOU_DONT_HAVE_ACCOUNT
} from "commons/string";

function SignInInputs(): React.ReactElement {
  return (
    <Sc.Container>
      <Input placeholder={PLACEHOLDER_EMAIL} />
      <Input placeholder={PLACEHOLDER_PW} />
      <NavItem to={routes.signUp} textAlign="center">
        {YOU_DONT_HAVE_ACCOUNT}
      </NavItem>
    </Sc.Container>
  );
}

export default SignInInputs;
