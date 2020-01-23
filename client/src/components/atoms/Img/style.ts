import styled from "styled-components";

type StyledImgProps = {
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down" | string;
};

export const StyledImg = styled.img<StyledImgProps>`
  width: 100%;
  height: 100%;
  object-fit: ${props => (props.objectFit ? props.objectFit : "none")};
`;
