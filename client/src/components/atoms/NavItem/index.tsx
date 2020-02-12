import React from "react";
import * as Sc from "./style";

type NavItemProps = {
  to: string;
  color?: "gray" | "black";
  textAlign?: "left" | "right" | "center";
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  to,
  color = "gray",
  textAlign = "left"
}) => {
  return (
    <Sc.NavItem textAlign={textAlign}>
      <Sc.NavAnchor to={to} color={color}>
        {children}
      </Sc.NavAnchor>
    </Sc.NavItem>
  );
};

export default NavItem;
