import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link).attrs({
  className: "row-card-wrapper"
})`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px 4px rgba(191, 188, 160, 0.68);
  margin-bottom: 2rem;
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

export const TitleWrapper = styled.section`
  margin-bottom: 0.5rem;
`;

export const DateWrapper = styled.section.attrs({
  className: "title-wrapper"
})`
  margin-bottom: 1rem;
`;

export const DescriptionWrapper = styled.section`
  margin-bottom: 1rem;
`;
