import styled, { css, ThemedStyledProps } from "styled-components";

interface TypographyStyleProps {
  styleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isItalic?: boolean;
  isBold?: boolean;
  color: "primary" | "secondary";
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

export const TypographyStyle = styled.span<TypographyStyleProps>`
  font-style: ${props => (props.isItalic ? "italic" : "normal")};
  font-weight: ${props => (props.isBold ? "bold" : "normal")};
  color: ${props => {
    if (props.color === "primary") {
      return "#000000";
    } else if (props.color === "secondary") {
      return "#fff200";
    } else {
      return "#000000";
    }
  }};
  ${styleTypeFunc};
  line-height: 1.2;
`;
