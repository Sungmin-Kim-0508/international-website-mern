import React from "react";
import * as Sc from "./style";

interface IProps {
  styleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isItalic?: boolean;
  isBold?: boolean;
  color: "primary" | "secondary" | "white";
}

const Typography: React.FC<IProps> = ({
  children,
  styleType,
  color,
  isItalic = false,
  isBold = false
}) => {
  return (
    <Sc.TypographyStyle
      styleType={styleType}
      isItalic={isItalic}
      isBold={isBold}
      color={color}
    >
      {children}
    </Sc.TypographyStyle>
  );
};

export default Typography;
