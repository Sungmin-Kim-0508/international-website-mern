import React from "react";
import * as Sc from "./style";

type NavItemProps = {
  to?: string;
  color?: "gray" | "black";
  textAlign?: "left" | "right" | "center";
  children: React.ReactNode;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  to,
  color = "gray",
  textAlign = "left",
  onClick
}) => {
  if (to) {
    return (
      <Sc.NavItem textAlign={textAlign}>
        <Sc.NavAnchor to={to as string} color={color}>
          {children}
        </Sc.NavAnchor>
      </Sc.NavItem>
    );
  } else {
    return (
      <Sc.NavItem textAlign={textAlign} onClick={onClick}>
        <Sc.NavAnchor color="gray" to="">
          {children}
        </Sc.NavAnchor>
      </Sc.NavItem>
    );
  }
};

export default NavItem;
