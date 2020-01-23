import styled, { css, ThemedStyledProps } from "styled-components";
import { Link } from "react-router-dom";
import { ButtonProps } from "react-bootstrap/Button";

const themeFunc = (props: ThemedStyledProps<ButtonProps, any>) => {
  if (props.theme === "primary") return "#fff200";
  else if (props.theme === "danger") return "#C70000";
  else if (props.theme === "success") return "#00C2FF";
};

const hoverThemFucn = (props: ThemedStyledProps<ButtonProps, any>) => {
  if (props.theme === "primary") return "#DCD221";
  else if (props.theme === "danger") return "#F24949";
  else if (props.theme === "success") return "#3FAACC";
};

const bootstrapBtn = (props: ThemedStyledProps<ButtonProps, any>) => {
  if (props.theme === "primary") return "primary";
  else if (props.theme === "danger") return "danger";
  else if (props.theme === "success") return "success";
};

const BtnStyle = css<ButtonProps>`
  background-color: ${themeFunc};
  border-color: ${themeFunc};
  color: #ffffff;

  :hover {
    background-color: ${hoverThemFucn};
    border-color: ${hoverThemFucn};
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link).attrs({
  className: `btn btn-${bootstrapBtn}`
})`
  ${BtnStyle}
`;

export const Anchor = styled.a.attrs({
  className: `btn btn-${bootstrapBtn}`
})`
  ${BtnStyle}
`;

export const Btn = styled.button.attrs({
  className: `btn btn-${bootstrapBtn}`
})`
  ${BtnStyle}
`;
