import React from "react";
import * as Sc from "./style";

type LabelDateProps = {
  color: "black" | "gray" | string;
};

const LabelDate: React.FC<LabelDateProps> = ({ children, color }) => {
  return <Sc.LabelDate color={color}>{children}</Sc.LabelDate>;
};

export default LabelDate;
