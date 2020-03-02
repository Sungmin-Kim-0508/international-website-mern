import React from "react";
import * as Sc from "./style";

type AnchorProps = {
  children: React.ReactNode;
  to?: string;
  id?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "white"
    | "gray"
    | "black";
  anchorRef?: React.RefObject<HTMLAnchorElement>;
  onClick?: () => void;
};

function Anchor({
  to,
  children,
  id = "",
  color = "black",
  anchorRef,
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
      <Sc.StyledAnchor color={color} onClick={onClick} id={id} ref={anchorRef}>
        {children}
      </Sc.StyledAnchor>
    );
  }
}

export default Anchor;
