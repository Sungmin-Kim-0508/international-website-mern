import React from "react";
import * as Sc from "./style";
import { Typography } from "components";

type ContactLabelProps = {
  note: { title: string; content: string };
};

const ContactLabels: React.FC<ContactLabelProps> = ({ note }) => {
  const { title, content } = note;
  return (
    <Sc.Row>
      <Typography styleType="h4" color="primary">
        {title}
      </Typography>
      <Typography styleType="h5" color="gray">
        {content}
      </Typography>
    </Sc.Row>
  );
};

export default ContactLabels;
