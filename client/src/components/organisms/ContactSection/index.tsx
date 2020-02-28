import React from "react";
import * as Sc from "./style";
import { ContactForm, Img } from "components";

type ContactFormProps = {};

function ContactSection({}: ContactFormProps): React.ReactElement {
  return (
    <Sc.Container>
      <ContactForm />
    </Sc.Container>
  );
}

export default ContactSection;
