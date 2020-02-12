import styled from "styled-components";
import { Link } from "react-router-dom";

export const Dropdown = styled.li.attrs({
  className: "nav-item dropdown"
})``;

export const DropDown = styled.a.attrs({})`
  color: #373a3c;

  :hover {
    color: #ffd615;
  }
`;

export const DropDownMenu = styled.div.attrs({
  className: "dropdown-menu"
})``;

export const Item = styled(Link).attrs({
  className: "dropdown-item"
})``;
