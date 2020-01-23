import React from "react";
import * as Sc from "./style";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ children, to }) => {
  return (
    <Sc.NavItem>
      <Sc.NavAnchor to={to}>{children}</Sc.NavAnchor>
    </Sc.NavItem>
  );
};

export default NavItem;
