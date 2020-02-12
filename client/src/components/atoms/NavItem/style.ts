import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavItemProps {
  textAlign: "left" | "right" | "center";
}

interface NavAnchorProps {
  color: "gray" | "black";
}

export const NavItem = styled.li<NavItemProps>`
  list-style: none;
  text-align: ${props => props.textAlign};
`;

export const NavAnchor = styled(Link)<NavAnchorProps>`
  color: ${props => {
    if (props.color === "gray") return "#999999";
    else if (props.color === "black") return "#000000";
  }};

  :hover,
  :active {
    color: #ffd615;
    text-decoration-line: underline;
  }
`;
