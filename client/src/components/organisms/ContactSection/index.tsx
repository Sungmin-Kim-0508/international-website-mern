import React from "react";
import * as Sc from "./style";
import { ContactForm, Img } from "components";

type ContactFormProps = {};

function ContactSection({}: ContactFormProps): React.ReactElement {
  return (
    <Sc.Container>
      <ContactForm />
      {/* <Sc.ImgWrapper>
        <Img
          src={`${process.env.PUBLIC_URL}/img/we_like_you.jpg`}
          alt="unsplash we-like-you"
          objectFit="fill"
        />
      </Sc.ImgWrapper> */}
    </Sc.Container>
  );
}

export default ContactSection;
