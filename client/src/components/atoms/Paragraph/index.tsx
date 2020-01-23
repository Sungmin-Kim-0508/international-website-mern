import React from "react";
import * as Sc from "./style";

type ParagraphProps = {
  /** Font Color */
  color: "black" | "white" | "gray" | string;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, color }) => {
  return <Sc.ParagraphStyle color={color}>{children}</Sc.ParagraphStyle>;
};

export default Paragraph;
