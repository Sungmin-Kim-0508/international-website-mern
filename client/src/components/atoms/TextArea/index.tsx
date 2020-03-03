import React from "react";
import * as Sc from "./style";

type TextAreaProps = {
  placeholder?: string;
  required?: boolean;
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
};
const TextArea: React.FC<TextAreaProps> = ({
  children,
  required,
  placeholder,
  textAreaRef
}) => {
  return (
    <Sc.StyledTextArea
      placeholder={placeholder}
      required={required}
      ref={textAreaRef}
    >
      {children}
    </Sc.StyledTextArea>
  );
};

export default TextArea;
