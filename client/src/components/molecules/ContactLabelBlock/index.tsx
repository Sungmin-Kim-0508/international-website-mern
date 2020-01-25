import React from "react";
import * as Sc from "./style";
import { ContactLabels } from "components";
import {
  CONTACT_NUMBER,
  NUMBER,
  EMAIL_ADDRESS,
  EMAIL,
  WEBSITE,
  WEBSITE_ADDRESS
} from "commons/string";
import uuid4 from "uuid4";

type ContactLabelProps = {};

const notes = [
  {
    title: CONTACT_NUMBER,
    content: NUMBER
  },
  {
    title: EMAIL_ADDRESS,
    content: EMAIL
  },
  {
    title: WEBSITE,
    content: WEBSITE_ADDRESS
    // content: "http://www.internationalstudentslondon.org/"
  }
];

const ContactLabelBlock: React.FC<ContactLabelProps> = ({}) => {
  return (
    <Sc.Container>
      {notes.map(note => (
        <ContactLabels key={uuid4()} note={note} />
      ))}
    </Sc.Container>
  );
};

export default ContactLabelBlock;
