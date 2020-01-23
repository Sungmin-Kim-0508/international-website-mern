import styled, { ThemedStyledProps } from "styled-components";

type ParagraphStyleProps = {
  color: "black" | "white" | "gray" | string;
};

const colorPick = (props: ThemedStyledProps<ParagraphStyleProps, any>) => {
  if (props.color === "black") return "#000000";
  else if (props.color === "white") return "#ffffff";
  else if (props.color === "gray") return "#718092";
  else return "#000000";
};

export const ParagraphStyle = styled.p<ParagraphStyleProps>`
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: ${colorPick};
`;
