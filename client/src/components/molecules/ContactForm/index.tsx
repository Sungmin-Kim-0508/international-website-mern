import React from "react";
import { ContactLabelBlock, ContactInputs, Typography } from "components";
import * as Sc from "./style";

type ContactFormProps = {};

function ContactForm({}: ContactFormProps): React.ReactElement {
  return (
    <Sc.Container>
      <Sc.LabelWrapper>
        <Typography styleType="h1" isBold={true} color="primary">
          Contact
        </Typography>
      </Sc.LabelWrapper>
      <Sc.FormWrapper>
        <ContactLabelBlock />
        <ContactInputs />
      </Sc.FormWrapper>
    </Sc.Container>
  );
}

export default ContactForm;
