import React from "react";
import * as Sc from "./style";

type ParagraphProps = {
  /** Font Color */
  color: "black" | "white" | "gray" | string;
  textAlign?: "left" | "right" | "center" | "justify" | "inherit";
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color,
  textAlign = "center"
}) => {
  return (
    <Sc.ParagraphStyle color={color} textAlign={textAlign}>
      {children}
    </Sc.ParagraphStyle>
  );
};

export default Paragraph;
