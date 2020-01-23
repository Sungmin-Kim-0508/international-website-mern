import styled from "styled-components";
// import { ButtonProps } from "react-bootstrap"

export const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.31);
`;

export const NavBrandWrapper = styled.section.attrs({
  className: "navbar-brand"
})``;

export const NavItemsWrapper = styled.section.attrs({
  className: "collapse navbar-collapse",
  id: "navbarNav"
})``;

export const NavUl = styled.section.attrs({
  className: "navbar-nav"
})``;
