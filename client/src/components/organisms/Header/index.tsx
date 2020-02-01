import React from "react";
import * as Sc from "./style";
import * as routes from "commons/__routes__";
import { slide as Menu } from "react-burger-menu";
import { NavBrand, NavItem, DropDownItems } from "components";
// import Headroom from "react-headroom";

type HeaderProps = {};

const resourceDropdownItems = [
  {
    navName: "For Students",
    to: routes.forStudents
  },
  {
    navName: "For Volunteers",
    to: routes.forVolunteers
  }
];

const memberDropdownItems = [
  {
    navName: "Sign In",
    to: routes.signIn
  },
  {
    navName: "Sign Up",
    to: routes.signUp
  }
];

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <Menu styles={Sc.styles}>
        <NavItem to={routes.home}>Home</NavItem>
        <NavItem to={routes.about}>About</NavItem>
        <NavItem to={routes.news}>News</NavItem>
        <NavItem to={routes.forStudents}>For Students</NavItem>
        <NavItem to={routes.forVolunteers}>For Volunteer</NavItem>
        <NavItem to={routes.contact}>Contact</NavItem>
      </Menu>
    );
  }
}

export default Header;
