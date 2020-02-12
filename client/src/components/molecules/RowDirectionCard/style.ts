import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr 0.6fr;

  &:hover {
    background-color: #ffd615;
    text-decoration: none;
  }
`;

export const ImgWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section`
  display: grid;
  grid-template-rows: 0.15fr 0.5fr 0fr;
  width: 100%;
  height: 100%;
`;
