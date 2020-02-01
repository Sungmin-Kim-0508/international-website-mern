import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled.li`
  color: #b8b7ad;
`;

export const NavAnchor = styled(Link)`
  color: #b8b7ad;

  :hover,
  :active {
    color: #fff200;
    text-decoration-line: underline;
  }
`;
