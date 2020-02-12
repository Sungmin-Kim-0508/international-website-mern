import React from "react";
import * as Sc from "./style";
import { Typography } from "components";
import { SIGN_UP_FOR_ISMC, CREATE_ISMC_EMAIL_ADDRESS } from "commons/string";

function SignUpLabels() {
  return (
    <Sc.Container>
      <Typography styleType="h1" textAlign="center">
        {SIGN_UP_FOR_ISMC}
      </Typography>
      <Typography styleType="h4" textAlign="center">
        {CREATE_ISMC_EMAIL_ADDRESS}
      </Typography>
    </Sc.Container>
  );
}

export default SignUpLabels;
