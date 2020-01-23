import styled from "styled-components";
import { Link } from "react-router-dom";

export const Dropdown = styled.li.attrs({
  className: "nav-item dropdown"
})``;

export const DropDown = styled.a.attrs({
  className: "nav-link dropdown-toggle",
  ["data-toggle"]: "dropdown",
  role: "button",
  href: "",
  ["aria-haspopup"]: "true",
  ["aria-expanded"]: "false"
})`
  color: #373a3c;

  :hover {
    color: #fff200;
  }
`;

export const DropDownMenu = styled.div.attrs({
  className: "dropdown-menu"
})``;

export const Item = styled(Link).attrs({
  className: "dropdown-item"
})``;
