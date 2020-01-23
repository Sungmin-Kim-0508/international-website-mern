import styled from "styled-components";

type SectionStyleProps = {
  topBottomPadding?: string;
  sidePadding?: string;
  isHalfWidth?: boolean;
};

export const Section = styled.div<SectionStyleProps>`
  display: grid;
  grid-template-columns: ${props => (props.isHalfWidth ? "1fr 1fr" : "")};
  padding: ${props => props.topBottomPadding} ${props => props.sidePadding};
  height: 530px;
`;
