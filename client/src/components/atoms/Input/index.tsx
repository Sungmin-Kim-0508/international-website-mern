import React from "react";
import * as Sc from "./style";

type InputProps = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: "text" | "button";
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: () => void;
};

const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  type,
  inputRef,
  placeholder
}) => {
  return (
    <Sc.Input
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      type={type}
      ref={inputRef}
    />
  );
};

export default Input;
