import React from "react";
import * as Sc from "./style";
import { Input, TextArea, Button } from "components";
import { text } from "@storybook/addon-knobs";

type ContactFormProps = {};

function ContactForm({}: ContactFormProps): React.ReactElement {
  return (
    <Sc.Container>
      <Input placeholder={text("1st row placeholder", "Your Name")} />
      <Input placeholder={text("2nd row placeholder", "Your Email")} />
      <Input placeholder={text("3rd row placeholder", "Subject")} />
      <TextArea placeholder={text("4th row placeholder", "Message")} />
      <Sc.ButtonWrapper>
        <Button theme="primary">Send</Button>
      </Sc.ButtonWrapper>
    </Sc.Container>
  );
}

export default ContactForm;
