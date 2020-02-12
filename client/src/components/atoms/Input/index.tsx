import React from "react";
import * as Sc from "./style";

type InputProps = {
  placeholder?: string;
  onChange?: () => void;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <Sc.Input placeholder={placeholder} />;
};

export default Input;
