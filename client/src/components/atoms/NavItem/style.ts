import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled.li.attrs({
  className: "nav-item"
})`
  /* color: #373a3c; */
`;

export const NavAnchor = styled(Link).attrs({
  className: "nav-link"
})`
  color: #373a3c;

  :hover,
  :active {
    color: #fff200;
    text-decoration-line: underline;
  }
`;
