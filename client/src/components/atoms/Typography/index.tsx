import React from "react";
import * as Sc from "./style";

interface IProps {
  styleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isItalic?: boolean;
  isBold?: boolean;
  isGeorgiaFont?: boolean;
  textAlign?: "left" | "right" | "center" | "justify" | "inherit";
  color?: "primary" | "secondary" | "white" | "gray" | "success" | "danger";
  onChange?: () => void;
}

const Typography: React.FC<IProps> = ({
  children,
  styleType,
  color = "primary",
  textAlign = "left",
  isItalic = false,
  isBold = false,
  isGeorgiaFont,
  onChange
}) => {
  return (
    <Sc.TypographyStyle
      styleType={styleType}
      textAlign={textAlign}
      isItalic={isItalic}
      isBold={isBold}
      color={color}
      isGeorgiaFont={isGeorgiaFont}
      onChange={onChange}
    >
      {children}
    </Sc.TypographyStyle>
  );
};

export default Typography;
