import React from "react";
import * as Sc from "./style";
import routes from "commons/__routes__";
import { slide as Menu } from "react-burger-menu";
import { NavItem, Typography, Img } from "components";
import { UserState, UserInfo } from "commons/__types__";

type HeaderProps = {
  signIn: UserState;
  onSignOut: () => void;
};

function Header({ signIn, onSignOut }: HeaderProps): React.ReactElement {
  const { avatarUrl, name } = signIn.user as UserInfo;
  const { isAuthenciated } = signIn;

  return (
    <Menu styles={Sc.menuStyles} left>
      {isAuthenciated && <Profile avatarUrl={avatarUrl} name={name} />}
      <Sc.ItemsWrapper>
        <NavItem to={routes.home}>Home</NavItem>
        {/* <NavItem to={routes.about}>About</NavItem> */}
        <NavItem to={routes.news}>News</NavItem>
        <NavItem to={routes.forStudents}>For Students</NavItem>
        {/* <NavItem to={routes.forVolunteers}>For Volunteer</NavItem> */}
        {/* <NavItem to={routes.contact}>Contact</NavItem> */}
        {isAuthenciated ? <AuthLink onSignOut={onSignOut} /> : <GuestLink />}
      </Sc.ItemsWrapper>
    </Menu>
  );
}

type ProfileProps = {
  avatarUrl: string;
  name: string;
};

const Profile = ({ avatarUrl, name }: ProfileProps) => (
  <Sc.ProfileWrapper>
    <Sc.AvatarWrapper>
      <Img src={avatarUrl} alt="avatart" objectFit="fill" isCircle={true} />
    </Sc.AvatarWrapper>
    <Sc.TypographyWrapper>
      <Typography styleType="h6" color="secondary">
        {name}
      </Typography>
    </Sc.TypographyWrapper>
  </Sc.ProfileWrapper>
);

const GuestLink = () => (
  <>
    <NavItem to={routes.signIn}>Sign In</NavItem>
    <NavItem to={routes.signUp}>Sign Up</NavItem>
  </>
);

type AuthLinkProps = {
  onSignOut: () => void;
};

const AuthLink = ({ onSignOut }: AuthLinkProps) => (
  <>
    <NavItem onClick={onSignOut}>Sign Out</NavItem>
  </>
);

export default Header;
