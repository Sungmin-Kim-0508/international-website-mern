import styled from "styled-components";
import { Link } from "react-router-dom";

type StyledAnchorProps = {
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "white"
    | "gray"
    | "black";
};

export const StyledAnchor = styled(Link)<StyledAnchorProps>`
  color: ${props => {
    if (props.color === "primary") return "#000000";
    else if (props.color === "secondary") return "#ffd615";
    else if (props.color === "white") return "#ffffff";
    else if (props.color === "gray") return "#718093";
    else if (props.color === "success") return "#00C2ff";
    else if (props.color === "danger") return "#C70000";
    else return "#000000";
  }};
  transition-property: color;
  transition-duration: 1s;
  :hover {
    text-decoration: none;
    color: #f7e70f;
  }
`;
