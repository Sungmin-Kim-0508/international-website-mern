import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1fr;

  &:hover {
    background-color: #fff200;
  }
`;

export const ImgWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section`
  display: grid;
  grid-template-rows: (3, 1fr);
  width: 100%;
  height: 100%;
`;
