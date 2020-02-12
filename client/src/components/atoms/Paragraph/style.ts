import styled, { ThemedStyledProps } from "styled-components";

type ParagraphStyleProps = {
  color: "black" | "white" | "gray" | "light-green" | string;
  textAlign: "left" | "right" | "center" | "justify" | "inherit";
};

const colorPick = (props: ThemedStyledProps<ParagraphStyleProps, any>) => {
  if (props.color === "black") return "#000000";
  else if (props.color === "white") return "#ffffff";
  else if (props.color === "gray") return "#718092";
  else if (props.color === "light-green") return "#3FFF52";
  else return "#000000";
};

export const ParagraphStyle = styled.p<ParagraphStyleProps>`
  font-size: 18px;
  line-height: 20px;
  text-align: ${props => props.textAlign};
  color: ${colorPick};
`;
