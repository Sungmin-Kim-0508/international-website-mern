import React from "react";
import * as Sc from "./style";

type AnchorProps = {
  to?: string;
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "white"
    | "gray"
    | "black";
  onClick?: () => void;
};

function Anchor({
  to,
  children,
  color = "black",
  onClick
}: AnchorProps): React.ReactElement {
  if (to) {
    return (
      <Sc.StyledLink to={to as string} color={color}>
        {children}
      </Sc.StyledLink>
    );
  } else {
    return (
      <Sc.StyledAnchor color={color} onClick={onClick}>
        {children}
      </Sc.StyledAnchor>
    );
  }
}

export default Anchor;
