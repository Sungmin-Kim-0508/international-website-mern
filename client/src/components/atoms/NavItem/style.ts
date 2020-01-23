import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  color: #373a3c;

  :hover,
  :active {
    color: #fff200;
    text-decoration-line: underline;
  }
`;
