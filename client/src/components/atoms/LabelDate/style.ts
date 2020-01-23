import styled from "styled-components";

type LabelDateProps = {
  color: "black" | "gray" | "white" | string;
};

export const LabelDate = styled.span<LabelDateProps>`
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${props => {
    if (props.color === "black") return "#000000";
    else if (props.color === "white") return "#ffffff";
    else if (props.color === "gray") return "#718093";
    else return "#000000";
  }};
`;
