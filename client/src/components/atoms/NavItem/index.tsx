import React from "react";
import * as Sc from "./style";

type NavItemProps = {
  to: string;
};

const NavItem: React.FC<NavItemProps> = ({ children, to }) => {
  return <Sc.NavItem to={to}>{children}</Sc.NavItem>;
};

export default NavItem;
