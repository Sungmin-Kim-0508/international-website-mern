import React from "react";
import * as Sc from "./style";
import { ContactLabels } from "components";
import uuid4 from "uuid4";

type ContactLabelProps = {};

const notes = [
  {
    title: "Contact Number",
    content: "+1 123 123 1234"
  },
  {
    title: "Email Address",
    content: "email@email.com"
  },
  {
    title: "Website",
    content: "www.abc.com"
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
