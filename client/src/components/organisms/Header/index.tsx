import React from "react";
import * as Sc from "./style";
import * as routes from "__routes__";
import { NavBrand, NavItem, DropDownItems } from "components";
import Headroom from "react-headroom";

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

function Header({}: HeaderProps): React.ReactElement {
  return (
    <Headroom
      onPin={() => console.log("Pinned")}
      onUnpin={() => console.log("unpinned")}
    >
      <Sc.Nav>
        <Sc.NavBrandWrapper>
          <NavBrand to={routes.home}>ISMC</NavBrand>
        </Sc.NavBrandWrapper>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Sc.NavItemsWrapper>
          <Sc.NavUl>
            <NavItem to={routes.home}>Home</NavItem>
            <NavItem to={routes.about}>About</NavItem>
            <DropDownItems
              dropdownMenuLabel="Resource"
              dropdownItems={resourceDropdownItems}
            />
            <NavItem to={routes.contact}>Contact</NavItem>
            <DropDownItems
              dropdownMenuLabel="Member"
              dropdownItems={memberDropdownItems}
            />
          </Sc.NavUl>
        </Sc.NavItemsWrapper>
      </Sc.Nav>
    </Headroom>
  );
}

export default Header;
