import React from "react";
import * as Sc from "./style";

type AnchorProps = {
  to: string;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "white" | "gray" | "black";
};

function Anchor({
  to,
  children,
  color = "black"
}: AnchorProps): React.ReactElement {
  return (
    <Sc.StyledAnchor to={to} color={color}>
      {children}
    </Sc.StyledAnchor>
  );
}

export default Anchor;
