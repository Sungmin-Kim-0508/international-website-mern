import React from "react";
import { Typography } from "components";
import { SIGN_IN_TO_ISMC, USING_YOUR_ACCOUNT } from "commons/string";
import * as Sc from "./style";

function SignInLabels(): React.ReactElement {
  return (
    <Sc.Container>
      <Typography styleType="h1" textAlign="center">
        {SIGN_IN_TO_ISMC}
      </Typography>
      <Typography styleType="h3" textAlign="center">
        {USING_YOUR_ACCOUNT}
      </Typography>
    </Sc.Container>
  );
}

export default SignInLabels;
