import styled, { css, ThemedStyledProps } from "styled-components";

interface TypographyStyleProps {
  styleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textAlign: "left" | "right" | "center" | "justify" | "inherit";
  color: "primary" | "secondary" | "white" | "gray" | "success" | "danger";
  isItalic?: boolean;
  isBold?: boolean;
  isGeorgiaFont?: boolean;
}

export const styleTypeFunc = (
  props: ThemedStyledProps<TypographyStyleProps, any>
) => {
  if (props.styleType === "h1") {
    return css`
      font-size: 2.5rem;
    `;
  } else if (props.styleType === "h2") {
    return css`
      font-size: 2rem;
    `;
  } else if (props.styleType === "h3") {
    return css`
      font-size: 1.75rem;
    `;
  } else if (props.styleType === "h4") {
    return css`
      font-size: 1.5rem;
    `;
  } else if (props.styleType === "h5") {
    return css`
      font-size: 1.25rem;
    `;
  } else if (props.styleType === "h6") {
    return css`
      font-size: 1rem;
    `;
  }
};

const styleColor = (props: ThemedStyledProps<TypographyStyleProps, any>) => {
  if (props.color === "primary") return "#000000";
  else if (props.color === "secondary") return "#ffd615";
  else if (props.color === "white") return "#ffffff";
  else if (props.color === "gray") return "#718093";
  else if (props.color === "success") return "#00C2ff";
  else if (props.color === "danger") return "#C70000";
  else return "#000000";
};

export const TypographyStyle = styled.span<TypographyStyleProps>`
  font-style: ${props => (props.isItalic ? "italic" : "normal")};
  font-weight: ${props => (props.isBold ? "bold" : "normal")};
  font-family: ${props => (props.isGeorgiaFont ? `Lora", Georgia, serif` : "")};
  color: ${styleColor};
  ${styleTypeFunc};
  line-height: 1.2;
  text-align: ${props => props.textAlign};
`;
