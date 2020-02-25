import React from "react";
import * as Sc from "./style";

type ButtonProps = {
  /** 버튼 색깔 */
  theme: "primary" | "gray" | "success" | "danger";
  /** Routing object of react-router-dom */
  to?: string;
  /** Routing Attribute of HTML DOM */
  href?: string;
  /** Button 클릭할 때 호출되는 MouseEvent 함수 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

/** This is Button Component */
const Button: React.FC<ButtonProps> = ({
  children,
  theme,
  to,
  href,
  onClick
}) => {
  if (to) {
    return (
      <Sc.StyledLink to={to} theme={theme}>
        {children}
      </Sc.StyledLink>
    );
  } else if (href) {
    return (
      <Sc.Anchor href={href} theme={theme}>
        {children}
      </Sc.Anchor>
    );
  } else {
    return (
      <Sc.Btn theme={theme} onClick={onClick}>
        {children}
      </Sc.Btn>
    );
  }
};

export default Button;
