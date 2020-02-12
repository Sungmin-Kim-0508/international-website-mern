import React from "react";
import * as Sc from "./style";
import { Input } from "components";
import {
  PLACEHOLDER_FULL_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PW,
  PLACEHOLDER_CONFIRM_PW
} from "commons/string";

function SignUpInputs(): React.ReactElement {
  return (
    <Sc.Container>
      <Input placeholder={PLACEHOLDER_FULL_NAME} />
      <Input placeholder={PLACEHOLDER_EMAIL} />
      <Input placeholder={PLACEHOLDER_PW} />
      <Input placeholder={PLACEHOLDER_CONFIRM_PW} />
    </Sc.Container>
  );
}

export default SignUpInputs;
