import React from "react";
import * as Sc from "./style";

type TextAreaProps = {
  placeholder?: string;
};
const TextArea: React.FC<TextAreaProps> = ({ children, placeholder }) => {
  return (
    <Sc.StyledTextArea placeholder={placeholder}>{children}</Sc.StyledTextArea>
  );
};

export default TextArea;
