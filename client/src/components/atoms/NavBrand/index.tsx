import React from "react";
import * as Sc from "./style";

type NavBrandProps = {
  to: string;
};

const NavBrand: React.FC<NavBrandProps> = ({ children, to }) => {
  return <Sc.NavBrand to={to}>{children}</Sc.NavBrand>;
};

export default NavBrand;
